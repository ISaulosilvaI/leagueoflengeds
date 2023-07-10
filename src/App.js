import { useState } from "react";
import { Banner } from "./components/Banner";
import { Formulario } from "./components/Formulario";
import { Time } from "./components/Time";
import { Link } from "./components/Button/link";
import { Rodape } from "./components/Rodape";




function App() {

  const times=[
    {
      nome: 'TOP ROUTE',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8'
    },
    {
      nome: 'JUNGLE',
      corPrimaria: '#57c278',
      corSecundaria: '#d9f7e9'
    },
    {
      nome: 'MIDDLE ROUTE',
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF'
    },
    {
      nome: 'BOTTOM ROUTE',
      corPrimaria: '#DB6EBF',
      corSecundaria: '#FAE9F5'
    },
    {
      nome: 'SUPPORT',
      corPrimaria: '#82cffa',
      corSecundaria: '#E8F8FF'
    }
  ]

  const [colaboradores, serColaboradores]= useState([])

  const aoNovoColaboradorAdicionado= (colaborador)=> {
    serColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner/>
      <Link/>
      <Formulario times={times.map(time=> time.nome)} aoCampeaoCadastrado={colaborador=> aoNovoColaboradorAdicionado(colaborador)}/>

      {times.map(time=> <Time 
        key={time.nome}
        nome={time.nome}
        corPrimaria={time.corPrimaria}
        corSecundaria={time.corSecundaria}
        colaboradores={colaboradores.filter(colaborador=> colaborador.time === time.nome)}
      />)}

      <Rodape/>
     
    </div>
  );
}

export default App;
