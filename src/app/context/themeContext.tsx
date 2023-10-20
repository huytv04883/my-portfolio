"use client";

import React, { createContext, useEffect, useState } from "react";
import { MODE } from "../constants/Constants";
import { IChildrenProps, ICurrentContextType } from "../constants/Theme.type";

export const ThemeContext = createContext<ICurrentContextType>({
  theme: MODE[0],
  toggle: () => {},
});

const getFromLocalStorage = (): string => {
  if (typeof window !== "undefined") {
    const value = localStorage.getItem("theme");
    return value || MODE[0];
  }
  return MODE[0]; // Default to "light" if window is undefined
};

export const ThemeContextProvider: React.FC<IChildrenProps> = ({
  children,
}: IChildrenProps) => {
  const [theme, setTheme] = useState<string>(() => {
    return getFromLocalStorage();
  });

  const toggle = () => {
    setTheme(theme === MODE[0] ? MODE[1] : MODE[0]);
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
};
