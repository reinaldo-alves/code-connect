import { IComment } from "@/types/types";
import Image from "next/image";
import styles from './comment.module.css'

export const Comment = ({ comment }: {comment: IComment}) => {
    return (
        <>
            <div className={styles.comment}>
                <Image src={comment.author?.avatar || ''} alt={`Avatar de ${comment.author?.name}`} width={32} height={32} />
                <strong>@{comment.author?.username}</strong>
                <p>{comment.text}</p>
            </div>
        </>
    )
}