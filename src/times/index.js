import { Fragment } from "react"
import "./Times.css"
import Item from "./itemTime"
const Times = (props) => {
    console.log("aqui", props.time)
    return (
(props.time.length > 0) &&
        <section className="container">

            <h2>{props.timeNome}</h2>
            <div className="container-div">

                {props.time.map((time) => {
                    console.log(time)
                    return <Item
                        key={props.nomePlayer}
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