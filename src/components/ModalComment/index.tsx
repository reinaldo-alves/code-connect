'use client'

import { FormHTMLAttributes, useRef } from "react"
import Modal from "../Modal";
import { IconButton } from "../IconButton"
import { Chat } from "../icons/Chat"
import { SubmitButton } from "../SubmitButton/SubmitButton";
import { Subheading } from "../Subheading/Subheading";
import { Textarea } from "../Textarea/Textarea";
import styles from './modalcomment.module.css'

interface IDialog {
    closeModal: () => void;
    openModal: () => void;
}

export const ModalComment = ({ action }: FormHTMLAttributes<HTMLFormElement>) => {
    const modalRef = useRef<IDialog | null>(null);

    return (
        <>
            <Modal ref={modalRef} >
                <form action={action} onSubmit={() => modalRef.current?.closeModal()}>
                    <Subheading>Deixe seu comentário sobre o post:</Subheading>
                    <Textarea required rows={8} name="text" placeholder="Digite aqui..."></Textarea>
                    <div className={styles.footer}>
                        <SubmitButton>Comentar</SubmitButton>
                    </div>
                </form>
            </Modal>
            <IconButton onClick={() => modalRef.current?.openModal()}>
                <Chat />
            </IconButton>
        </>
    )
}