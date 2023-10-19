"use client";
import Link from "next/link";
import styles from "./drawer.module.css";
import { useState } from "react";
import Image from "next/image";
import { signOut, useSession } from "next-auth/react";
import { STATUS } from "@/app/constants/Constants";

const Drawer = () => {
  const [open, setOpen] = useState(false);
  const { status } = useSession();

  return (
    <>
      {status === STATUS[2] ? (
        <Link href="/login" className="cursor-pointer sm:hidden">
          Login
        </Link>
      ) : (
        <>
          <Link href="/write" className="cursor-pointer sm:hidden">
            Write
          </Link>
          <span onClick={() => signOut()} className="cursor-pointer sm:hidden">
            Logout
          </span>
        </>
      )}
      <div className="w-5 h-4 sm:flex hidden flex-col justify-between cursor-pointer" onClick={() => setOpen(true)}>
        <div className={`${styles.line} w-full h-0.5`}></div>
        <div className={`${styles.line} w-full h-0.5`}></div>
        <div className={`${styles.line} w-full h-0.5`}></div>
      </div>
      {open && (
        <div className={styles.responsiveMenu}>
          <div className="absolute top-4 right-4 left-auto" onClick={() => setOpen(false)}>
            <Image src="/close.svg" alt="" width={18} height={18} />
          </div>
          <Link href="/">Homepage</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
          {status === STATUS[2] ? (
            <Link href="/login">Login</Link>
          ) : (
            <>
              <Link href="/write">Write</Link>
              <span className="cursor-pointer">Logout</span>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default Drawer;
