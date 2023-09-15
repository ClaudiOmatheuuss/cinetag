import styles from './Rodape.module.css';

function Rodape () {
    return (
        <>
            <div className={styles.espaco}></div>
            <footer className={styles.rodape}>
                <h2>Desenvolvido por Alura.</h2>
            </footer>
        </>
    )
}

export default Rodape;