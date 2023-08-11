import "./Item.css"

const Item = (props) => {
    return (
        
            <div className="container-item">

                <div className="div">

                    <div className="div-img" style={{backgroundColor:props.corP}}>
                        <img src={props.img} alt="img" />

                    </div>
                    <div className="div-nome-paragrafo">
                        <h3 style={{color:props.corP}}>{props.nome}</h3>
                        <h4 style={{color:props.corP}}>{props.funcao}</h4>
                    </div>
                </div>
            </div>
        )
}
export default Item