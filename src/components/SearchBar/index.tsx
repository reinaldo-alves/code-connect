import styles from './searchbar.module.css';

export const SearchBar = () => {
    return (
        <form className={styles.form} action='/'>
            <input name='q' placeholder='Digite o que você procura' />
            <button>Buscar</button>
        </form>
    )
}