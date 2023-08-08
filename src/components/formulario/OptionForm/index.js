import "./Option.css"
const Selection = (props)=>{
    return (
        <label  className="selection">
<h2>
{props.nomeTitulo}
</h2>

    <select value={props.valor} onChange={(evento)=>props.valorAlterarF(evento.target.value)}> 
        <option>Escolha a função</option>
        {props.funcoes.map((elemento)=> <option  key={elemento}>{elemento}</option>)}
    </select>
        </label>
    )
}
export default Selection