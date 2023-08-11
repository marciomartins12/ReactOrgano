import { useState } from "react"
import "./Formulario.css"
import Inputs from "./ImputsFormulario";
import Selection from "./OptionForm";
import { v4 as uuidv4 } from "uuid";
const Form = (props)=>{
    const [nomePlayer, setNomePlayer] = useState("");
    const [funcaoPlayer, setFuncaoPlayer] = useState("");
    const [imgPlayer, setimgPlayer] = useState("");

    return (
        <div  className="formulario" style={{backgroundImage: "url(./img/fundo.png)", backgroundPosition: "center"}}>
        <form onSubmit={(evento)=>{
            evento.preventDefault()
            props.receberPlayer({nomePlayer, funcaoPlayer, imgPlayer, id:uuidv4()})
        }}>

           <Inputs
           nomeTitulo="Nome"
           placeholder="Digite o nome do personagem"
           valor = {nomePlayer}
           valorAlterarF = {(valor)=> setNomePlayer(valor)}
           />
           <Inputs
           nomeTitulo="Imagem"
           placeholder="Digite o URL da Imagem"
           valor = {imgPlayer}
           valorAlterarF ={(valor)=> setimgPlayer(valor)}
           />
           <Selection
           nomeTitulo="Escolha a funcao"
           funcoes={props.funcoes}
           valor = {funcaoPlayer}
           valorAlterarF = {(valor)=> setFuncaoPlayer(valor)}
           />
           <button>
            enviar
           </button>
        </form>
           </div>

    )
}
export default Form