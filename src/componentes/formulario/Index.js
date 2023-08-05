import CampoTexto from "../campoTexto/Index"
import "./Formulario.css"
import { useState } from "react";
import Botao from "./Botao/Index"
import Select from "../select/Index"


const Formularior = (props) => {
    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState('');
    const [grupo, setGrupo] = useState('');
    
 
    
    return (
        <section className="campo-secao">

            <div className="formulario_campo">
                <form onSubmit={(evento) => {
                     props.aosubmitformulario({
                        nome,
                        cargo,
                        imagem,
                        grupo
                })
                
                evento.preventDefault()
                setNome("")
                setCargo("")
                setGrupo("")
                setImagem("")
                    
                }}>
                    <h2>
                        Preencha os dados para criar o card colaborador.
                    </h2>
                    <CampoTexto
                        obrigatorio={true}
                        placeholder="Digite o Seu Nome"
                        label="Nome"
                        valor={nome}
                        aoAlterado={x => {
                            setNome(x)}}
                        />
                    <CampoTexto
                        obrigatorio={true}
                        placeholder="Digite o seu Cargo"
                        label="Cargo"
                        valor={cargo}
                        aoAlterado={x => setCargo(x)}
                        />
                    <CampoTexto
                        obrigatorio={true}
                        placeholder="Digite o URL da Imagem"
                        label="Imagem"
                        valor={imagem}
                        aoAlterado={x => setImagem(x)}
                        />
                    <Select
                        label="Time"
                        grupos = {props.grupos}
                        valor = {grupo}
                        aoAlterado={x => setGrupo(x)}
                        />

                    <Botao>
                        Criar Card
                    </Botao>
                </form>
            </div>
        </section>
    )
}
export default Formularior
