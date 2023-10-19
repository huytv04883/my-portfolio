import Image from "next/image";
import styles from "./featured.module.css";

const Featured = () => {
  return (
    <div className="mt-8">
      <h1 className="text-8xl font-light">
        <b>Hey, lama dev here!</b> Discover my stories and creative ideas.
      </h1>
      <div className="mt-24 flex items-center gap-12">
        <div className="flex-1 h-[500] relative">
          <Image src="/p1.jpeg" alt="" fill className="object-cover" />
        </div>
        <div className="flex flex-1 flex-col gap-5">
          <h1 className="text-4xl">
            Lorem ipsum dolor sit amet alim consectetur adipisicing elit.
          </h1>
          <p className={`${styles.postDesc} text-xl font-light`}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Cupiditate, quam nisi magni ea laborum inventore voluptatum
            laudantium repellat ducimus unde aspernatur fuga. Quo, accusantium
            quisquam! Harum unde sit culpa debitis.
          </p>
          <button className="py-4 px-5 border-none rounded min-w-max">Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
