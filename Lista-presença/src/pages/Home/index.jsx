import './style.css'

import Card from '../../components/Card'

function Home() {
  return (
    <div className='container'>
      <h1>Lista de Presença</h1>
      <input type="text" placeholder="Digite o nome..." />
      <button type="buttonn">Adcionar</button>

      <Card name='Lucas' time='10:55:25' />
      <Card name='Kaique' time='11:00:10' />

    </div>
  )
}

export default Home
