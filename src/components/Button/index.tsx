import { ReactNode } from 'react';
import styles from './button.module.css';

export const Button = ({children, type, disabled}: {children: ReactNode, type?: "button" | "submit" | "reset" | undefined, disabled?: boolean}) => {
    return <button className={styles.button} type={type} aria-disabled={disabled}>{children}</button>
}