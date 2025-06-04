import { ReactNode } from "react"
import styles from './textarea.module.css'

export const Textarea = ({ children, required, rows, name, placeholder }: {children?: ReactNode, required?: boolean, rows: number, name: string, placeholder?: string}) => {
    return (
        <textarea className={styles.textarea} required={required} rows={rows} name={name} placeholder={placeholder}>{children}</textarea>
    )
}