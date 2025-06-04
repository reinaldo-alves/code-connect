'use client'

import { useRef } from "react"
import Modal from "../Modal";
import { SubmitButton } from "../SubmitButton/SubmitButton";
import { Textarea } from "../Textarea/Textarea";
import styles from './modalreply.module.css'
import { IComment } from "@/types/types";
import { postReply } from "@/actions";
import { Comment } from "../Comment";

interface IDialog {
    closeModal: () => void;
    openModal: () => void;
}

export const ModalReply = ({ comment }: {comment: IComment}) => {
    const modalRef = useRef<IDialog | null>(null);

    const submitReply = postReply.bind(null, comment);

    return (
        <>
            <Modal ref={modalRef} >
                <form action={submitReply} onSubmit={() => modalRef.current?.closeModal()}>
                    <div className={styles.body}>
                        <Comment comment={comment} />
                    </div>
                    <div className={styles.divider}></div>
                    <Textarea required rows={8} name="text" placeholder="Digite aqui..."></Textarea>
                    <div className={styles.footer}>
                        <SubmitButton>Responder</SubmitButton>
                    </div>
                </form>
            </Modal>
            <button className={styles.button} onClick={() => modalRef.current?.openModal()}>
                Responder
            </button>
        </>
    )
}