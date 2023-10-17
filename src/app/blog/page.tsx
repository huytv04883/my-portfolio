import CardList from "../components/cardList/CardList";
import { PageProps } from "../constants/Theme.type";
import styles from "./blogPage.module.css";

const BlogPage = ({ searchParams }: PageProps) => {
  const page = parseInt(searchParams.page) || 1;
  const { cat } = searchParams;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{cat} Blog</h1>
      <div className={styles.content}></div>
      <div className={styles.content}>
        <CardList page={page} cat={cat} />
      </div>
    </div>
  );
};

export default BlogPage;
