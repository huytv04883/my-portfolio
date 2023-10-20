"use client";

import { IChildrenProps } from "../constants/Theme.type";
import { SessionProvider } from "next-auth/react";

const AuthProvider: React.FC<IChildrenProps> = ({ children }: IChildrenProps) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default AuthProvider;
