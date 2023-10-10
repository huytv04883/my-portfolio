"use client";

import React from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import Drawer from "../drawer/Drawer";
import DarkMode from "../../darkMode/DarkMode";
import { LinkFB, LinkedIn, LinkgGit } from "@/app/constants/Constants";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
        <Link href={LinkFB}>
          <Image src="/facebook.svg" alt="" width={18} height={18} />
        </Link>
        <Link href={LinkedIn}>
          <Image src="/linkedin.svg" alt="" width={18} height={18} />
        </Link>
        <Link href={LinkgGit}>
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
        <DarkMode />
        <Drawer />
      </div>
    </div>
  );
};

export default Navbar;
