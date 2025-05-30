'use client' // Error boundaries must be Client Components
 
import Image from 'next/image';
import { useEffect } from 'react';
import robot from './error/500.png'
import Link from 'next/link';
import { ArrowBack } from '@/components/icons/ArrowBack';
import styles from './error/error.module.css';
import { Heading } from '@/components/Heading';
 
export default function Error({ error }: { error: Error & { digest?: string } }) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error)
    }, [error])
 
    return (
        <div className={styles.container}>
            <Image src={robot} alt='Erro 500' width={500} height={300} />
            <Heading>Opa! Um erro ocorreu.</Heading>
            <p className={styles.text}>Não conseguimos carregar a página, volte para seguir navegando.</p>
            <Link href='/'>Voltar ao feed <ArrowBack color='#81fe88' /></Link>
        </div>
    )  
}