import Image from "next/image";
import Link from "next/link";
import styles from "./categories.module.css";
import { IItemPops } from "./Categories.type";

const getData = async () => {
  const res = await fetch(`${process.env.BASE_DOMAIN}/categories`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};

const Categories = async () => {
  const data = await getData();

  return (
    <div className="container">
      <h1 className="py-5 font-semibold">Popular Categories</h1>
      <div className="flex flex-wrap items-center gap-5">
        {data?.map((item: IItemPops) => (
          <Link
            href={`/blog?cat=${item.slug}`}
            className={`${styles.category} ${styles[item.slug]} flex items-center gap-2 p-2 rounded-md`}
            key={item.id}
          >
            {item.img && (
              <Image
                src={item.img}
                alt={item.slug}
                width={32}
                height={32}
                className="rounded-full object-cover w-8 h-8"
              />
            )}
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
