import styles from './NaoEncontrada.module.css';

import naoEncontrado from './naoEncontrado.jpg'

function NaoEncontrada () {
    return (
        <section className={styles.container} >
            <h2>Ops!</h2>
            <div className={styles.imagem} style={{ backgroundImage: `url(${naoEncontrado})` }}></div>
            <h3>O conteúdo que você procura não foi encontrado!</h3>
        </section>
    )
}

export default NaoEncontrada;