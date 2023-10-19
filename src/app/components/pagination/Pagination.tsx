"use client";

import React from "react";
import styles from "./pagination.module.css";
import { useRouter } from "next/navigation";
import { IPaginationProps } from "./Pagination.type";

const Pagination: React.FC<IPaginationProps> = ({
  page,
  isShowPrev,
  isShowNext,
}) => {
  const router = useRouter();

  return (
    <div className="flex justify-between mt-5">
      <button
        className="border-none p-4 bg-[crimson] text-white cursor-pointer disabled:cursor-not-allowed"
        disabled={!isShowPrev}
        onClick={() => router.push(`?page=${page - 1}`)}
      >
        Previous
      </button>
      <button
        disabled={!isShowNext}
        className="border-none p-4 bg-[crimson] text-white cursor-pointer disabled:cursor-not-allowed"
        onClick={() => router.push(`?page=${page + 1}`)}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
