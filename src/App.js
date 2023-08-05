
import { useState } from "react";
import Banner from "./componentes/Banner/Banner.js";
import Times from "./componentes/Times/Index.js";
import Formularior from "./componentes/formulario/Index.js";
import Rodape from "./componentes/rodape/Index.js";


function App() {
  const [componentes, setComponentes] = useState([])
  const grupos = [
    {
      nome: "Familia",
      corPrimaria: "#57c278",
      corSecundaria: "#D9F7E9"
    },
    {
      nome: "Time Cs",
      corPrimaria: "#82CFFA",
      corSecundaria: "#E8F8FF"
    },
    {
      nome: "Time Valorante",
      corPrimaria: "#A6D157",
      corSecundaria: "#F0F8E2"
    }
  ]
 const receberComponetes = (componente)=>{
  setComponentes([...componentes, componente]);
  
}
  return (
    <div className="App">
      <Banner />
      <Formularior
        aosubmitformulario = { (compomente) => receberComponetes(compomente)}
        grupos={grupos.map(grupo => grupo.nome)}

      />

      {grupos.map((time) => <Times
        key={time.nome}
        nome={time.nome}
        corP={time.corPrimaria}
        corS={time.corSecundaria}
        times={componentes.filter((componente)=> componente.grupo === time.nome)}
      />)}

      <Rodape/>
    </div>
  );
}

export default App;
