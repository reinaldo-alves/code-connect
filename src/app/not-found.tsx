import Image from 'next/image';
import robot from './error/404.png';
import Link from 'next/link';
import { ArrowBack } from '@/components/icons/ArrowBack';
import styles from './error/error.module.css';
import { Heading } from '@/components/Heading';
 
export default function NotFound() {
    return (
        <div className={styles.container}>
            <Image src={robot} alt='Erro 404' width={500} height={300} />
            <Heading>Ops! Página não encontrada.</Heading>
            <p className={styles.text}>Você pode voltar ao feed e continuar buscando projetos incríveis!</p>
            <Link href='/'>Voltar ao feed <ArrowBack color='#81fe88' /></Link>
        </div>
    )  
}