'use client'

import { forwardRef, useRef } from "react"
import { ReactNode } from "react"
import styles from './modal.module.css'
import { Modal } from "../Modal"
import { IconButton } from "../IconButton"
import { Chat } from "../icons/Chat"

interface IDialog {
    closeModal: () => void;
    openModal: () => void;
}

export const ModalComment = forwardRef(() => {
    const modalRef = useRef<IDialog | null>(null);

    return (
        <>
            <Modal ref={modalRef} >
                <h1>Olá mundo</h1>
            </Modal>
            <IconButton onClick={() => modalRef.current?.openModal()}>
                <Chat />
            </IconButton>
        </>
    )
})