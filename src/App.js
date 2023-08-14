import { useState } from 'react';
import Form from './components/formulario';
import ImgHeader from './components/imgHeader';
import Times from './components/times';

function App() {
  const [player, setPlayer] = useState([])

  const [times, setTimes] = useState([
    {
      funcao: "Iniciador",
      cor: "#c18ad1",

    },
    {
      funcao: "Duelista",
      cor: "#0061ad",

    },
    {
      funcao: "Controlador",
      cor: "#9b2d65",

    },
    {
      funcao: "Sentinela",
      cor: "#09f6b6",


    },
  ])
  const [funcoes, setFuncoes] = useState([
    "Iniciador",
    "Duelista",
    "Controlador",
    "Sentinela"
  ])
  const receberPlayer = (elemento) => {
    setPlayer([...player, elemento])
  }

  function mudarCor(cor, nome) {
    setTimes(times.map((time) => {
      if (time.funcao === nome) {
        time.cor = cor
      }
      return time
    }))
  }
  function aoDeletar(id) {
    setPlayer(player.filter((time) => time.id !== id))
  }
  function atualizarListadeGrupos(nome, cor) {
    setTimes([...times, { funcao: nome, cor: cor }])
    setFuncoes([...funcoes, nome]);
  }
  return (
    <section>
      <ImgHeader />
      <Form
        listaSet={atualizarListadeGrupos}
        funcoes={funcoes}
        receberPlayer={(elemento) => receberPlayer(elemento)}
      />
      {times.map((time, index) => {
        return <Times
          key={index}
          timeCorP={time.cor}
          timeNome={time.funcao}
          mudarCor={mudarCor}
          time={player.filter((p) => p.funcaoPlayer === time.funcao)}
          aoDeletar={aoDeletar}
        />
      })}
    </section>
  );
}


export default App;
