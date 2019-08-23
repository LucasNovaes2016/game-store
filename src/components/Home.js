import React from 'react'
import AddGameButton from './AddGameButton'
import Alert from './Alert'
import Games from './games/Games'
import Jumbotron from './layout/Jumbotron'
import SearchGame from './SearchGame'

const Home = () => {
  return (
    <div className="container mt-4">
      <Alert />
      <Jumbotron />
      <AddGameButton />
      <SearchGame />
      <Games />
    </div>
  )
}

export default Home
