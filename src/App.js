
import { useState } from 'react';
import './App.css';
import Form from './components/formulario';
import ImgHeader from './components/imgHeader';
import Times from './times';

function App() {
  const [player, setPlayer] = useState([])

  const times = [
    {
      funcao: "Iniciador",
      corPrimaria: "#00000"
    },
    {
      funcao: "Duelista",
      corPrimaria: "#00000"
    },
    {
      funcao: "Controlador",
      corPrimaria: "#00000"
    },
    {
      funcao: "Sentinela",
      corPrimaria: "#00000"
    },
  ]
  const funcoes = [
    "Iniciador",
    "Duelista",
    "Constrolador",
    "Sentinela"
  ]
const receberPlayer = (elemento)=>{
  setPlayer([...player ,elemento])
  console.log(elemento)
}



  return (
    <section>
      <ImgHeader />
      <Form
        funcoes={funcoes}
        receberPlayer={ (elemento) => receberPlayer(elemento)}
         />
      {times.map(time=>{
        return <Times
        key={time.funcao}
        timeCorP = {time.corPrimaria}
        timeNome = {time.funcao}
        time = {player.filter((p)=> p.funcaoPlayer === time.funcao)}
        />
      })}
    </section>
  );
}

export default App;
