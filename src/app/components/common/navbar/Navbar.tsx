"use client";

import React from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import Drawer from "../drawer/Drawer";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
        <Link href="https://www.facebook.com/huytv279/">
          <Image src="/facebook.svg" alt="" width={18} height={18} />
        </Link>
        <Link href="https://www.linkedin.com/in/huy-tran-van-5a4581238/">
          <Image src="/linkedin.svg" alt="" width={18} height={18} />
        </Link>
        <Link href="https://github.com/huytv04883?tab=repositories">
          <Image src="/github.svg" alt="" width={18} height={18} />
        </Link>
      </div>
      <div className={styles.logo}>Since - 1998</div>
      <div className={styles.links}>
        <Link href="/" className={styles.link}>
          Homepage
        </Link>
        <Link href="/" className={styles.link}>
          Contact
        </Link>
        <Link href="/" className={styles.link}>
          About
        </Link>
        <Drawer />
      </div>
    </div>
  );
};

export default Navbar;
