import "./CampoTexto.css"

const CampoTexto = (props) => {

    
    return (

        <label className="item">
            {props.label}
            <input
                value={props.valor}
                onChange={(evento)=> props.aoAlterado(evento.target.value)}
                required={props.obrigatorio}
                type="text"
                placeholder={props.placeholder}>
            </input>
        </label>

    );
}
export default CampoTexto