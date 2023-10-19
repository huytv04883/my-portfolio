"use client";

import { LinkFB, LinkedIn, LinkgGit } from "@/app/constants/Constants";
import Image from "next/image";
import Link from "next/link";
import DarkMode from "../../darkMode/DarkMode";
import Drawer from "../drawer/Drawer";

const Navbar = () => {
  return (
    <header className="flex items-center justify-between h-28">
      <div className="flex flex-1 gap-2">
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
      <div className="flex text-center text-4xl font-bold">Since - 1998</div>
      <div className="flex items-center gap-5 flex-1 text-xl">
        <Link href="/">Homepage</Link>
        <Link href="/">Contact</Link>
        <Link href="/">About</Link>
        <DarkMode />
        <Drawer />
      </div>
    </header>
  );
};

export default Navbar;
