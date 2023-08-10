
import { useState } from 'react';
import Form from './components/formulario';
import ImgHeader from './components/imgHeader';
import Times from './components/times';

function App() {
  const [player, setPlayer] = useState([])

  const times = [
    {
      funcao: "Iniciador",
      corPrimaria: "#c18ad1",
      corSecundaria: "#e0bce8"
    },
    {
      funcao: "Duelista",
      corPrimaria: "#0061ad",
      corSecundaria: "#56d0e9"
    },
    {
      funcao: "Controlador",
      corPrimaria: "#9b2d65",
      corSecundaria: "#c48e94"
    },
    {
      funcao: "Sentinela",
      corPrimaria: "#09f6b6",
      corSecundaria: "#a9ffff"
     
    },
  ]
  const funcoes = [
    "Iniciador",
    "Duelista",
    "Controlador",
    "Sentinela"
  ]
  const receberPlayer = (elemento) => {
    setPlayer([...player, elemento])
    console.log(elemento)
  }



  return (
    <section>
      <ImgHeader />
      <Form
        funcoes={funcoes}
        receberPlayer={(elemento) => receberPlayer(elemento)}
      />
      {times.map(time => {
        return <Times
          key={time.funcao}
          timeCorP={time.corPrimaria}
          timeCorS={time.corSecundaria}
          timeNome={time.funcao}
          time={player.filter((p) => p.funcaoPlayer === time.funcao)}
        />
      })}
    </section>
  );
}

export default App;
