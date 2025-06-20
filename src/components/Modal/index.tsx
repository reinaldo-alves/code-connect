'use client'

import { forwardRef, useImperativeHandle, useRef } from "react"
import { ReactNode } from "react"
import styles from './modal.module.css'

const Modal = forwardRef(({ children }: {children: ReactNode}, ref) => {
    const dialogRef = useRef<HTMLDialogElement | null>(null);

    const closeModal = () => {
        dialogRef.current?.close();
    }

    const openModal = () => {
        dialogRef.current?.showModal();
    }

    useImperativeHandle(ref, () => {
        return { closeModal, openModal }
    })

    return (
        <dialog ref={dialogRef} className={styles.dialog}>
            <header>
                <button onClick={closeModal}>X</button>
            </header>
            {children}
        </dialog>
    )
})

Modal.displayName = 'Modal'

export default Modal