import Featured from "./components/featured/Featured";
import Categories from "./components/categories/Categories";
import CardList from "./components/cardList/CardList";
import { IPageProps } from "./constants/Theme.type";

export default function Home({ searchParams }: IPageProps) {
  const page = parseInt(searchParams.page) || 1;
  const { cat } = searchParams;

  return (
    <main>
      <Categories />
      <CardList page={page} cat={cat} />
    </main>
  );
}
