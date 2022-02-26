import { useEffect, useState } from "react";
import Formulario from "./components/Formulario";
import Header from "./components/Header";
import ListadoNoticias from "./components/ListadoNoticias";


function App() {

  // definir categoria y noticias 
  const [categoria, setCategoria] = useState('');
  const [noticias, setNoticias] = useState([])

  // al detectar el cambio en categoria se ejecute el componente
  useEffect( ()=> {

    const consultarAPI = async()=> {
      const url = `https://newsapi.org/v2/top-headlines?country=co&category=${ categoria }&apiKey=f8e177d38829459f915857912d5f3866`;

      const respuesta = await fetch( url );
      const noticias = await respuesta.json();

      setNoticias(noticias.articles);
    }

    consultarAPI();
  },[categoria])

  return (
    <>
      <Header 
        titulo = 'Buscador de Noticias'
      />

      <div className="container white">
        <Formulario 
          setCategoria = { setCategoria }
        />

        <ListadoNoticias
          noticias={ noticias }
        />
      </div>
    </>
  );
}

export default App;
