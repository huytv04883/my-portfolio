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
        <Link href="/login" className={styles.link}>
          Login
        </Link>
      ) : (
        <>
          <Link href="/write" className={styles.link}>
            Write
          </Link>
          <span onClick={() => signOut()} className={styles.link}>
            Logout
          </span>
        </>
      )}
      <div className={styles.burger} onClick={() => setOpen(true)}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      {open && (
        <div className={styles.responsiveMenu}>
          <div className={styles.close} onClick={() => setOpen(false)}>
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
              <span className={styles.link}>Logout</span>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default Drawer;
