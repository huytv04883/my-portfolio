import CardList from "./components/cardList/CardList";
import Categories from "./components/categories/Categories";
import Sidebar from "./components/sidebar/Sidebar";
import { IPageProps } from "./constants/Theme.type";

export default function Home({ searchParams }: IPageProps) {
  const page = parseInt(searchParams.page) || 1;
  const { cat } = searchParams;

  return (
    <main>
      <div className="grid grid-cols-1fr-30 gap-8">
        <Sidebar />
        <div className="flex flex-col">
          <Categories />
          <CardList page={page} cat={cat} />
        </div>
      </div>
    </main>
  );
}
