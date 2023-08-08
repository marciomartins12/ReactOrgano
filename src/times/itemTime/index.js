import "./Item.css"
const Item = (props)=>{
    return(  
    <section className="container-item">
    <div className="container-item">

        <div className="div">

            <div className="div-img">
                <img src={props.img} alt="img" />

            </div>
            <div className="div-nome-paragrafo">
                <h3>{props.nome}</h3>
                <h4>{props.funcao}</h4>
            </div>
        </div>
    </div>
    </section>)
}
export default Item