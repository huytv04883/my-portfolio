import { IPostProps } from "@/app/constants/Theme.type";
import Card from "../card/Card";
import Pagination from "../pagination/Pagination";
import { CardListProps } from "./CardList.type";

const getData = async (page: number, cat: string) => {
  const res = await fetch(
    `${process.env.BASE_DOMAIN}/posts?page=${page}&cat=${cat || ""}`,
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
    <div className="container">
      <h1 className="py-3">Recent Posts</h1>
      <div className="py-3 grid grid-cols-2 gap-5">
        {posts?.map((item: IPostProps) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
      {posts.length > 0 && (
        <Pagination
          page={page}
          isShowPrev={isShowPrev}
          isShowNext={isShowNext}
        />
      )}
    </div>
  );
};

export default CardList;
