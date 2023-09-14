import Cabecalho from "components/Cabecalho";
import Banner from "components/Banner";
import Titulo from "components/Titulo";
import Card from "components/Card";
import Rodape from "components/Rodape";

function Inicio() {
    return (
        <>
            <Cabecalho />
            <Banner imagem="home" />
            <Titulo>
                <h1>Um lugar para guardar seus vídeos e filmes!</h1>
            </Titulo>
            <Card id='1' titulo='Gato curioso' capa='https://cdn2.thecatapi.com/images/xPuWATvp9.jpg' />
            <Rodape />
        </>
    )
}

export default Inicio;