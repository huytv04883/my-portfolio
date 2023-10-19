import CardList from "../components/cardList/CardList";
import { PageProps } from "../constants/Theme.type";

const BlogPage = ({ searchParams }: PageProps) => {
  const page = parseInt(searchParams.page) || 1;
  const { cat } = searchParams;

  return (
    <div className="container m-auto">
      <h1 className="p-2 bg-slate-500 text-white text-center capitalize">{cat} Blog</h1>
      <div className="flex gap-8">
        <CardList page={page} cat={cat} />
      </div>
    </div>
  );
};

export default BlogPage;
