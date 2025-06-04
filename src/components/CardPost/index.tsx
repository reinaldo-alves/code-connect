import Image from "next/image"
import styles from './cardpost.module.css';
import { Avatar } from "../Avatar"
import { IPost } from "@/types/types"
import Link from "next/link";
import { incrementThumbsUp, postComment } from "@/actions";
import { ThumbsUpButton } from "./ThumbsUpButton";
import { ModalComment } from "../ModalComment";

export const CardPost = ({post, highlight}: {post: IPost, highlight?: boolean}) => {
    
    const sumbitThumbsUp = incrementThumbsUp.bind(null, post);
    const submitComment = postComment.bind(null, post);
    
    return (
        <article className={styles.article} style={{width: highlight? 993 : 486}}>
            <header className={styles.header}>
                <figure style={{height: highlight? 300 : 133}}>
                    <Image src={post.cover} alt={post.title} fill />
                </figure>
            </header>
            <section>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
                {!highlight && <Link href={`/posts/${post.slug}`}>Ver detalhes</Link>}
            </section>
            <footer>
                <div className={styles.actions}>
                    <form action={sumbitThumbsUp}>
                        <ThumbsUpButton />
                        <p>{post.likes}</p>
                    </form>
                    <div>
                        <ModalComment action={submitComment}/>
                        <p>{post.comments.length}</p>
                    </div>
                </div>
                <Avatar name={post.author?.username || ''} imageSrc={post.author?.avatar || ''} />
            </footer>
        </article>
    )
}