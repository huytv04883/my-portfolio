import { ReactNode } from "react";

export interface CurrentContextType {
    theme: string;
    toggle: () => void;
}

export interface ChildrenProps {
    children: ReactNode;
}

export interface PostProps {
    id: string;
    createdAt: string;
    slug: string;
    title: string;
    desc: string;
    img?: string;
    views: number;
    catSlug: string;
}

export interface PostPageSearchParamsProps {
    page: string;
    cat: string;
    sort_by?: string;
    sort_order?: "asc" | "desc";
}

export interface PageProps {
    params: {};
    searchParams: PostPageSearchParamsProps;
}