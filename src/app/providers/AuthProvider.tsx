"use client";

import { ChildrenProps } from "../constants/themeInterface";
import { SessionProvider } from "next-auth/react";

const AuthProvider: React.FC<ChildrenProps> = ({ children }: ChildrenProps) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default AuthProvider;
