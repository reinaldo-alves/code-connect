import { MouseEventHandler, ReactNode } from "react"
import styles from './iconbutton.module.css';

export const IconButton = ({ children, disabled, onClick }: {children: ReactNode, disabled?: boolean, onClick?: MouseEventHandler<HTMLButtonElement>}) => {
    return (
        <button disabled={disabled} onClick={onClick} className={styles.btn}>{children}</button>
    )
}