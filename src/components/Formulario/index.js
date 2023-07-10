import { useState } from 'react'
import './Formulario.css'
import { CampoDeTexto } from '../CampoDeTexto'
import { ListaSuspensa } from '../ListaSuspensa/inde'
import { Button } from '../Button'

export const Formulario= (props)=> {
    const [nome, setNome]= useState('')
    const [funcao, setFuncao]= useState('')
    const [imagem, setImagem]= useState('')
    const [time, setTime]= useState('')

    const aoSalvar= (evento)=> {
        evento.preventDefault()
        props.aoCampeaoCadastrado({
            nome,
            funcao,
            imagem,
            time
        });
        setNome('')
        setFuncao('')
        setImagem('')
        setTime('')
    }

    return(
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Monte a sua equipe com seus campeões</h2>
                <CampoDeTexto
                    obrigatorio={true}
                    label='Nome'
                    placeholder='Digite o nome do campeão'
                    valor={nome}
                    aoAlterado={valor=> setNome(valor)}
                />

                <CampoDeTexto
                    obrigatorio={true}
                    label='Função'
                    placeholder='Digite a função do campeão'
                    valor={funcao}
                    aoAlterado={valor=> setFuncao(valor)}
                />

                <CampoDeTexto
                    obrigatorio={true}
                    label='Imagem'
                    placeholder='Digite o endereço da imagem'
                    valor={imagem}
                    aoAlterado={valor=> setImagem(valor)}
                />

                <ListaSuspensa
                      obrigatorio={true}
                      label='Rota'
                      itens={props.times}
                      valor={time}
                      aoAlterado={valor=> setTime(valor)}
                />

                <Button>Criar card</Button>
            </form>
        </section>
    )
}