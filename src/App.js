import { useState } from 'react';
import Form from './components/formulario';
import ImgHeader from './components/imgHeader';
import Times from './components/times';

function App() {
  const [player, setPlayer] = useState([])

  const [times, setTimes ]= useState( [
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
  const funcoes = [
    "Iniciador",
    "Duelista",
    "Controlador",
    "Sentinela"
  ]
  const receberPlayer = (elemento) => {
    setPlayer([...player, elemento])
  }
function mudarCor(cor, nome){
  setTimes(times.map((time)=>{
    if(time.funcao === nome){
      time.cor = cor
    }
  return time}) )
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
          timeCorP={time.cor}
          timeNome={time.funcao}
          mudarCor ={mudarCor}
          time={player.filter((p) => p.funcaoPlayer === time.funcao)}
        />
      })}
    </section>
  );
}


export default App;
