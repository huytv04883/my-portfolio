"use client";

import Image from "next/image";
import styles from "./darkMode.module.css";
import { ThemeContext } from "@/app/context/themeContext";
import { MODE } from "@/app/constants/Constants";
import { useContext } from "react";

const DarkMode = () => {
  const { theme, toggle } = useContext(ThemeContext);

  return (
    <div
      className={styles.container}
      onClick={() => toggle()}
      style={
        theme === MODE[1]
          ? { backgroundColor: "white" }
          : { backgroundColor: "#0f172a" }
      }
    >
      <Image src="/moon.png" alt="" width={14} height={14} />
      <div
        className={styles.ball}
        style={
          theme === MODE[1]
            ? { left: 1, background: "#0f172a" }
            : { right: 1, background: "white" }
        }
      ></div>
      <Image src="/sun.png" alt="" width={14} height={14} />
    </div>
  );
};

export default DarkMode;
