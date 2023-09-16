import styles from './NaoEncontrada.module.css';

import naoEncontrado from './naoEncontrado.jpg'

function NaoEncontrada () {
    return (
        <section className={styles.container} >
            <h2>Ops!</h2>
            <div className={styles.capa} style={{ backgroundImage: `url(${naoEncontrado})` }}></div>
            <p>O conteúdo que você procura não foi encontrado!</p>
        </section>
    )
}

export default NaoEncontrada;