import Image from "next/image"
import styles from './cardpost.module.css';
import { Avatar } from "../Avatar"
import { IPost } from "@/types/types"
import Link from "next/link";

export const CardPost = ({post, highlight}: {post: IPost, highlight?: boolean}) => {
    return (
        <Link href={`/posts/${post.slug}`} className={styles.link}>
            <article className={styles.article} style={{width: highlight? 993 : 486}}>
                <header>
                    <figure style={{height: highlight? 300 : 133}}>
                        <Image src={post.cover} alt={post.title} fill />
                    </figure>
                </header>
                <section>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </section>
                <footer>
                    <Avatar name={post.author?.username || ''} imageSrc={post.author?.avatar || ''} />
                </footer>
            </article>
        </Link>
    )
}