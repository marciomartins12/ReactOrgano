import { useState } from "react"
import "./Formulario.css"
import Inputs from "./ImputsFormulario";
import Selection from "./OptionForm";
import { v4 as uuidv4 } from "uuid";
const Form = (props) => {
    const [nomePlayer, setNomePlayer] = useState("");
    const [funcaoPlayer, setFuncaoPlayer] = useState("");
    const [imgPlayer, setimgPlayer] = useState("");
    const [nomeFuncao, setNomeFuncao] = useState("");
    const [corFuncao, setCorFuncao] = useState("#990502");

    return (
        <div className="formulario" style={{ backgroundImage: "url(./img/fundo.png)", backgroundPosition: "center" }}>
            <form onSubmit={(evento) => {
                evento.preventDefault();
                props.receberPlayer({ nomePlayer, funcaoPlayer, imgPlayer, id: uuidv4(), favorito: false });
                setNomePlayer("");
                setFuncaoPlayer("");
                setimgPlayer("");
            }}>

                <Inputs
                    tipo={"text"}
                    nomeTitulo="Nome"
                    placeholder="Digite o nome do personagem"
                    valor={nomePlayer}
                    valorAlterarF={(valor) => setNomePlayer(valor)}
                />
                <Inputs
                    tipo={"text"}
                    nomeTitulo="Imagem"
                    placeholder="Digite o URL da Imagem"
                    valor={imgPlayer}
                    valorAlterarF={(valor) => setimgPlayer(valor)}
                />
                <Selection
                    nomeTitulo="Escolha a funcao"
                    funcoes={props.funcoes}
                    valor={funcaoPlayer}
                    valorAlterarF={(valor) => setFuncaoPlayer(valor)}
                />
                <button>
                    Enviar
                </button>
            </form>
            <form onSubmit={(evento) => {
                evento.preventDefault()
                setNomeFuncao("")
                setCorFuncao("")
                props.listaSet(nomeFuncao, corFuncao)
            }}>
                <Inputs
                    tipo={"text"}
                    nomeTitulo="Nome da Classe"
                    placeholder="Digite o nome da classe"
                    valor={nomeFuncao}
                    valorAlterarF={(valor) => setNomeFuncao(valor)}
                />
                <Inputs
                    tipo={"color"}
                    nomeTitulo="Cor"
                    valor={corFuncao}
                    valorAlterarF={(valor) => setCorFuncao(valor)}
                />
                <button>Criar novo Grupo</button>
            </form>
        </div>

    )
}
export default Form