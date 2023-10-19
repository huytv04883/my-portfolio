"use client";

import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";
import { LinkgGit, LinkFB, LinkedIn } from "@/app/constants/Constants";

const Footer = () => {
  return (
    <footer className={`${styles.footer_wrapper} py-5 flex justify-between mt-auto`}>
      <div className="flex flex-1 flex-col gap-3">
        <div className="flex items-center gap-2">
          <Image src="/logo.png" alt="Huytv" width={50} height={50} />
          <h1 className="text-2xl">Since-1998</h1>
        </div>
        <p className="font-light">
          Phone: 0349548174 <br /> Email: huytv04883@gmail.com <br /> Address:
          79 Duong Khue, Tu Liem district, Ha Noi
        </p>
        <div className="mt-2 flex gap-2">
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
      <div className="flex flex-1 justify-end gap-24">
        <div className="flex flex-col gap-2 font-light">
          <span className="font-bold">Links</span>
          <ul className="flex flex-col gap-2">
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
        <div className="flex flex-col gap-2 font-light">
          <span className="font-bold">Social</span>
          <ul className="flex flex-col gap-2">
            <li><Link href={LinkFB}>Facebook</Link></li>
            <li><Link href={LinkedIn}>Linkedin</Link></li>
            <li><Link href={LinkgGit}>Github</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
