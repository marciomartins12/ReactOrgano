import "./Select.css"


const Select = (props)=>{
    function retornaOption (){
       return props.grupos.map((item)=> <option  key={item}>{item}</option>)
    }
    
    return (
        <label> 
            <span className="classSpan">
                {props.label}
            </span>
            <select onChange={( evento=>props.aoAlterado(evento.target.value))} value={props.valor} className="select">
                <option>Escolha o Time</option>
        {retornaOption()}
        </select>
        </label>
    )
}
export default Select
