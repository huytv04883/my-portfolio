import { ReactNode } from "react";
export interface ICurrentContextType {
    theme: string;
    toggle: () => void;
}
export interface IChildrenProps {
    children: ReactNode;
}
export interface IPostProps {
    id: string;
    createdAt: string;
    slug: string;
    title: string;
    desc: string;
    img?: string;
    views: number;
    catSlug: string;
}
export interface IPostPageSearchParamsProps {
    page: string;
    cat: string;
    sort_by?: string;
    sort_order?: "asc" | "desc";
}
export interface IPageProps {
    params: {};
    searchParams: IPostPageSearchParamsProps;
}
export interface IAccountProps {
    id: string;
    userId: string;
    type: string;
    provider: string;
    providerAccountId: string;
    refresh_token?: string;
    access_token?: string;
    expires_at?: number;
    token_type?: string;
    scope?: string;
    id_token?: string;
    session_state?: string;
}
export interface ICommentsProps {
    id: string;
    createdAt: string;
    desc: string;
    userEmail: string;
    user: IUserProps;
    postSlug: string;
}
export interface IUserProps {
    id: string;
    name?: string;
    email: string;
    emailVerified: Date;
    image?: string;
    accounts: IAccountProps
    post: IAccountProps;
    comment: ICommentsProps;
}
