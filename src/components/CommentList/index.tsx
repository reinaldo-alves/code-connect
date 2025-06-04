import { IComment } from "@/types/types";
import { Comment } from "../Comment";
import styles from './commentlist.module.css'
import { Replies } from "../Replies";
import { ModalReply } from "../ModalReply";

export const CommentList = ({ comments }: {comments: Array<IComment>}) => {
    return (
        <section className={styles.comments}>
            <h2>Comentários</h2>
            <ul>
                {comments.map(comment => 
                    <li key={comment.id}>
                        <Comment comment={comment}/>
                        <ModalReply comment={comment} />
                        <Replies comment={comment} />
                    </li>            
                )}
            </ul>
        </section>
    )
}