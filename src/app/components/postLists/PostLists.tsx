import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./postLists.module.css"
import { IPostListsProps } from "./PostList.type";

const PostLists = ({withImage}: IPostListsProps) => {
  return (
    <div className="flex flex-col gap-8">
      <Link href="/" className="flex items-center gap-5">
        {withImage && (
          <div className="relative flex aspect-square">
            <Image src="/p1.jpeg" alt="" fill className="rounded-full object-cover border border-[lightgray]" />
          </div>
        )}
        <div className="flex-[4] flex flex-col gap-1">
          <span className={`py-1 px-2 rounded-lg text-xs text-white w-max ${styles.travel}`}>Travel</span>
          <h3 className={`${styles.postTitle} text-lg font-medium`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h3>
          <div className="text-xs">
            <span className={styles.username}>John Doe</span>
            <span className="text-gray-500"> - 10.03.2023</span>
          </div>
        </div>
      </Link>
      <Link href="/" className="flex items-center gap-5">
        {withImage && (
          <div className="relative flex aspect-square">
            <Image src="/p1.jpeg" alt="" fill className="rounded-full object-cover border-2 border-solid border-[lightgray]" />
          </div>
        )}
        <div className="flex-[4] flex flex-col gap-1">
          <span className={`py-1 px-2 rounded-lg text-xs text-white w-max ${styles.culture}`}>
            Culture
          </span>
          <h3 className={`${styles.postTitle} text-lg font-medium`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h3>
          <div className="text-xs">
            <span className={styles.username}>John Doe</span>
            <span className="text-gray-500"> - 10.03.2023</span>
          </div>
        </div>
      </Link>
      <Link href="/" className="flex items-center gap-5">
        {withImage && (
          <div className="relative flex aspect-square">
            <Image src="/p1.jpeg" alt="" fill className="rounded-full object-cover border border-[lightgray]" />
          </div>
        )}
        <div className="flex-[4] flex flex-col gap-1">
          <span className={`py-1 px-2 rounded-lg text-xs text-white w-max ${styles.food}`}>Food</span>
          <h3 className={`${styles.postTitle} text-lg font-medium`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h3>
          <div className="text-xs">
            <span className={styles.username}>John Doe</span>
            <span className="text-gray-500"> - 10.03.2023</span>
          </div>
        </div>
      </Link>
      <Link href="/" className="flex items-center gap-5">
        {withImage && (
          <div className="relative flex aspect-square">
            <Image src="/p1.jpeg" alt="" fill className="rounded-full object-cover border border-[lightgray]" />
          </div>
        )}
        <div className="flex-[4] flex flex-col gap-1">
          <span className={`py-1 px-2 rounded-lg text-xs text-white w-max ${styles.fashion}`}>
            Fashion
          </span>
          <h3 className={`${styles.postTitle} text-lg font-medium`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h3>
          <div className="text-xs">
            <span className={styles.username}>John Doe</span>
            <span className="text-gray-500"> - 10.03.2023</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PostLists;
