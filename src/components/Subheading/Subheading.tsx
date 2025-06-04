import { ReactNode } from "react";
import styles from './subheading.module.css'

export const Subheading = ({ children }: {children: ReactNode}) => {
    return <h2 className={styles.h2}>{children}</h2>
}