import React from 'react'
import { Link } from 'react-router-dom';

const AddGameButton = () => {
  return (
    <div id="newGameButtonContainer" className="row justify-content-md-center">
      <div className="col-lg-8">
        <Link to='/games/add' className="btn btn-danger btn-lg btn-block rounded-0">Adicionar Jogo</Link>
      </div>
    </div>
  )
}

export default AddGameButton
