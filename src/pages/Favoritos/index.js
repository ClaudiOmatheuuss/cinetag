import Banner from 'components/Banner';
import Titulo from 'components/Titulo';
import Card from 'components/Card';

import styles from './Favoritos.module.css';

function Favoritos () {
    return (
        <>
            <Banner imagem="favoritos" />
            <Titulo>
                <h1>Meus Favoritos</h1>
            </Titulo>
            <section className={styles.container}>
                <Card id="1" titulo="Gato molhado" capa="https://cdn2.thecatapi.com/images/92p.jpg" />
            </section>
        </>
    )
}

export default Favoritos;
