import Banner from 'components/Banner';
import Titulo from 'components/Titulo';
import Card from 'components/Card';

import styles from './Favoritos.module.css';
import { useFavoritoContext } from 'contexts/Favoritos';

function Favoritos () {
    const { favorito } = useFavoritoContext();
    return (
        <>
            <Banner imagem="favoritos" />
            <Titulo>
                <h1>Meus Favoritos</h1>
            </Titulo>
            <section className={styles.container}>
            {favorito.length === 0 
                ? <h2>Nenhum vídeo favoritado até o momento</h2>
                : favorito.map((fav) => <Card {...fav} key={fav.id} />)
            }
            </section>
        </>
    )
}

export default Favoritos;
