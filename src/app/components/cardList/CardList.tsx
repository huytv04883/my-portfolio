import { PostProps } from "@/app/constants/Theme.type";
import Card from "../card/Card";
import styles from "./cardList.module.css";
import { CardListProps } from "./CardList.type";
import Pagination from "../pagination/Pagination";

const getData = async (page: number, cat: string) => {
  const res = await fetch(
    `${process.env.NEXTAUTH_URL}/posts?page=${page}&cat=${cat || ""}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};

const CardList = async ({ page, cat }: CardListProps) => {
  const { posts, count } = await getData(page, cat);

  const ITEM_PER_PAGE = 2;
  const isShowPrev = ITEM_PER_PAGE * (page - 1) > 0;
  const isShowNext = ITEM_PER_PAGE * (page - 1) + ITEM_PER_PAGE < count;

  if (!posts.length) {
    return <p className="flex items-center w-full justify-center p-4">No Item</p>;
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Posts</h1>
      <div className={styles.posts}>
        {posts?.map((item: PostProps) => (
          <Card item={item} key={item.id} />
        ))}
        {posts.lenght > 0 && (
          <Pagination
            page={page}
            isShowPrev={isShowPrev}
            isShowNext={isShowNext}
          />
        )}
      </div>
    </div>
  );
};

export default CardList;
