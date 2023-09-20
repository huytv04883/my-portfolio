import { ReactNode } from "react";

export interface CurrentContextType {
    theme: string;
    toggle: () => void;
}

export interface ChildrenProps {
    children: ReactNode;
}