import './Button.css'

export const Button= (props)=> {
    return (
        <div className='container'>
            <button className='botao'>
                {props.children}
            </button>
           
        </div>
    )
}