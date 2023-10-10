"use client";

import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";
import { LinkgGit, LinkFB, LinkedIn } from "@/app/constants/Constants";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <Image src="/logo.png" alt="Huytv" width={50} height={50} />
          <h1 className={styles.logoText}>2709 - Since 1998</h1>
        </div>
        <p className={styles.desc}>
          Phone: 0349548174 <br /> Email: huytv04883@gmail.com <br /> Address:
          79 Duong Khue, Tu Liem district, Ha Noi
        </p>
        <div className={styles.icons}>
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
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link href="/blog">Blog</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Social</span>
          <Link href={LinkFB}>Facebook</Link>
          <Link href={LinkedIn}>Linkedin</Link>
          <Link href={LinkgGit}>Github</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
