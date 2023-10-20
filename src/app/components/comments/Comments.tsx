"use client";

import Link from "next/link";
import styles from "./comments.module.css";
import Image from "next/image";
import useSWR from "swr";
import { useSession } from "next-auth/react";
import { ChangeEvent, useState } from "react";
import { ICommentsProps } from "@/app/constants/Theme.type";
import { ISlugProps } from "./Comments.type";
import { STATUS } from "@/app/constants/Constants";

const fetcher = async (url: string) => {
    const res = await fetch(url);

    const data = await res.json();

    if (!res.ok) {
        const error = new Error(data.message);
        throw error;
    }

    return data;
};

const Comments = ({ postSlug }: ISlugProps) => {
    const { status } = useSession();

    const { data, mutate, isLoading } = useSWR(status === STATUS[0] ?
        `${process.env.BASE_DOMAIN}/comments?postSlug=${postSlug}` : null,
        fetcher
    );

    const [desc, setDesc] = useState("");

    const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setDesc(event.target.value)
    }

    const handleSubmit = async () => {
        await fetch("/api/comments", {
            method: "POST",
            body: JSON.stringify({ desc, postSlug }),
        });
        mutate();
    };
    

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Comments</h1>
            {status === STATUS[0] ? (
                <div className={styles.write}>
                    <textarea
                        value={desc}
                        placeholder="write a comment..."
                        className={styles.input}
                        onChange={(e) => handleChange(e)}
                    />
                    <button className={styles.button} onClick={handleSubmit}>
                        Send
                    </button>
                </div>
            ) : (
                <Link href="/login">Login to write a comment</Link>
            )}
            <div className={styles.comments}>
                {isLoading
                    ? "loading"
                    : data?.map((item: ICommentsProps) => (
                        <div className={styles.comment} key={item.id}>
                            <div className={styles.user}>
                                {item?.user?.image && (
                                    <Image
                                        src={item.user.image}
                                        alt=""
                                        width={50}
                                        height={50}
                                        className={styles.image}
                                    />
                                )}
                                <div className={styles.userInfo}>
                                    <span className={styles.username}>{item.user.name}</span>
                                    <span className={styles.date}>{item.createdAt}</span>
                                </div>
                            </div>
                            <p className={styles.desc}>{item.desc}</p>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default Comments;
