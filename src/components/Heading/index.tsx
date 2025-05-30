import { ReactNode } from 'react'
import styles from './heading.module.css'

export const Heading = ({children}: {children: ReactNode}) => {
    return <h1 className={styles.heading}>{children}</h1>
}