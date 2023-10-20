"use client";

import { IChildrenProps } from "../constants/Theme.type";
import { ThemeContext } from "../context/themeContext";
import React, { useContext, useEffect, useState } from "react";

const ThemeProvider: React.FC<IChildrenProps> = ({
  children,
}: IChildrenProps) => {
  const { theme } = useContext(ThemeContext);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (mounted) {
    return <div className={theme}>{children}</div>;
  }
};

export default ThemeProvider;
