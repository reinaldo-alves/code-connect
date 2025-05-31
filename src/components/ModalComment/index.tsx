'use client'

import { forwardRef, useRef } from "react"
import Modal from "../Modal";
import { IconButton } from "../IconButton"
import { Chat } from "../icons/Chat"

interface IDialog {
    closeModal: () => void;
    openModal: () => void;
}

export const ModalComment = () => {
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
}