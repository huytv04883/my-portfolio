import Image from "next/image";
import Link from "next/link";
import { ICardProps } from "./Card.type";

const Card: React.FC<ICardProps> = ({ item }) => {
  return (
    <div className="py-2">
      {item.img && (
        <div className="flex-1 h-80 relative">
          <Image src={item.img} alt="" fill className="object-cover" />
        </div>
      )}
      <div className="flex-1 flex flex-col gap-5">
        <div className="flex items-center gap-1">
          <span className="text-slate-500">
            {item.createdAt.substring(0, 10)}
          </span>
          <span className="text-red-600 uppercase">{item.catSlug}</span>
        </div>
        <Link href={`/posts/${item.slug}`}>
          <h1>{item.title}</h1>
        </Link>
        <div
          className="text-lg font-light"
          dangerouslySetInnerHTML={{ __html: item?.desc.substring(0, 60) }}
        />
        <Link href={`/posts/${item.slug}`} className="pb-2 border-b border-solid border-[crimson]">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;
