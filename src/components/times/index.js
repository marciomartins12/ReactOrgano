import "./Times.css"
import Item from "./itemTime"
import hexToRgba from "hex-to-rgba"
const Times = (props) => {
    return (
(props.time.length > 0) &&
        <section className="container" style={{backgroundImage:"url(./img/fundo.png)",
        backgroundColor:hexToRgba(props.timeCorP, "0.40")}}>
<div className="h2">
            <h2 style={{color: props.timeCorP,borderColor: props.timeCorP ,padding:10}}>{props.timeNome}</h2>
</div>
            <input className="inp" type="color"
            value={props.timeCorP}
            onChange={(evento)=> props.mudarCor(evento.target.value, props.timeNome)}
            />
            <div className="container-div">

                {props.time.map((time, indice) => {
                    
                    return <Item
                        key={indice}
                        corP={props.timeCorP}
                        nome={time.nomePlayer}
                        funcao={time.funcaoPlayer}
                        img={time.imgPlayer}
                        id={time.id}
                        aoDeletar={props.aoDeletar}
                    />

                })}
            </div>
        </section>
    )
}
export default Times
