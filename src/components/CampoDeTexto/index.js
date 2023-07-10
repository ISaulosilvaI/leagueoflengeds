import './CampoDeTexto.css'

export const CampoDeTexto= (props)=> {
    const placeholderModficado= `${props.placeholder}`
    const aoDigitado= (evento)=> {
        props.aoAlterado(evento.target.value)
    }

    return (
        <div className='campo-texto'>
            <label>{props.label}</label>

            <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={placeholderModficado}/>
        </div>
    )
}