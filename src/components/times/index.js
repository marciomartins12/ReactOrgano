import "./Times.css"
import Item from "./itemTime"
const Times = (props) => {
    return (
(props.time.length > 0) &&
        <section className="container" style={{backgroundImage:"url(./img/fundo.png)",
        backgroundColor:props.timeCorS}}>
<div className="h2">

            <h2 style={{backgroundColor:props.timeCorP, padding:10}}>{props.timeNome}</h2>
</div>
            <div className="container-div">

                {props.time.map((time, indice) => {
                    console.log(time)
                    return <Item
                        key={indice}
                        corP={props.timeCorP}
                        nome={time.nomePlayer}
                        funcao={time.funcaoPlayer}
                        img={time.imgPlayer}
                    />

                })}
            </div>
        </section>
    )
}
export default Times