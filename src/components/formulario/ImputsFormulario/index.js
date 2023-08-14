import "./Inputs.css"
const Inputs = (props) => {
    return (
        <label className="label">
            <h2>
                {props.nomeTitulo}
            </h2>
            <input
                type={props.tipo}
                required={true}
                value={props.value}
                placeholder={props.placeholder}
                onChange={(evento)=>props.valorAlterarF(evento.target.value)}
                value={props.valor}
            />
        </label>
    )

}
export default Inputs