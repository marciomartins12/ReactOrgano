import Colaborador from "../colaborador/Index"
import "./times.css"
const Times = (props) => {

    return (
        (props.times.length>0)?
        <section className="container-times" style={{ backgroundColor: props.corS }}>

            <h3 style={{ color: props.corP, borderColor: props.corP }}>{props.nome}</h3>
            <div className="div-container">
            {props.times.map((elemento) => <Colaborador
                key={elemento.nome}
                nome={elemento.nome}
                cargo={elemento.cargo}
                imagem={elemento.imagem}
                corPrimaria={props.corP}
                />)}
                </div>
        </section>:""
    )
}
export default Times