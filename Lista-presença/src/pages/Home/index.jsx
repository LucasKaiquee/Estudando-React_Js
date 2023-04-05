import './style.css'

import Card from '../../components/Card'

function Home() {
  return (
    <div className='container'>
      <h1>Lista de Presença</h1>
      <input type="text" placeholder="Digite o nome..." />
      <button type="buttonn">Adcionar</button>

      <Card />
      <Card />
      <Card />

    </div>
  )
}

export default Home
