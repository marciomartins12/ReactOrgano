import {AiFillCloseCircle} from "react-icons/ai"
import {AiOutlineHeart} from "react-icons/ai"
import {AiFillHeart} from "react-icons/ai"
import "./Item.css"
const Item = (props) => {
    console.log(props.favorito)
    function tamanhoefuncao(){
        props.favoritar(props.id)
    }
    return (
        
            <div className="container-item">
<AiFillCloseCircle 
 className="icone-fechar"
 onClick={()=>{ props.aoDeletar(props.id)}}
 />
                <div className="div">

                    <div className="div-img" style={{backgroundColor:props.corP}}>
                        <img src={props.img} alt="img" />

                    </div>
                    <div className="div-nome-paragrafo">
                        <h3 style={{color:props.corP}}>{props.nome}</h3>
                        <h4 style={{color:props.corP}}>{props.funcao}</h4>
                        {props.favorito? <AiFillHeart size={25} color="red" onClick={()=>tamanhoefuncao()}/>: <AiOutlineHeart size={25} onClick={()=>tamanhoefuncao()}/>}
                        
                       
                    </div>
                </div>
            </div>
        )
}
export default Item