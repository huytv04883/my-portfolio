import Featured from "./components/featured/Featured";
import Categories from "./components/categories/Categories";
import CardList from "./components/cardList/CardList";
import { PageProps } from "./constants/Theme.type";

export default function Home({ searchParams }: PageProps) {
  const page = parseInt(searchParams.page) || 1;

  return (
    <main>
      <Categories />
      <CardList page={page} />
    </main>
  );
}
