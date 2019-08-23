import React from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteGame, setCurrentGame } from '../../actions/storeActions';

const GameItem = ({ game, deleteGame, setCurrentGame }) => {

  return (
    <div className="col-lg-6 col-xl-4 mb-4">
      <div className="card text-center mx-1">
        <div className="card-header text-light bg-dark">
          {game.platform}
        </div>
        <div className="card-body">
          <h5 className="card-title">{game.title}</h5>
          <p className="card-text">{game.description}</p>
          <p className="card-text">Zerado: {game.finished ? <i class="fa fa-check-circle fa-lg text-success" aria-hidden="true"></i> : <i class="fa fa-times-circle fa-lg text-danger" aria-hidden="true"></i>}</p>
        </div>
        <div className="card-footer game-card-footer">
          <div className="d-flex justify-content-between">
            <div data-toggle="tooltip" data-placement="left" title="Editar Jogo">
              <a href='#!' onClick={() => setCurrentGame(game)} className="fa-stack fa-lg text-primary">
                <i className="fa fa-circle-o fa-stack-2x"></i>
                <i className="fa fa-pencil fa-stack-1x"></i>
              </a>
            </div>
            <div data-toggle="tooltip" data-placement="left" title="Remover Jogo">
              <a href='#!' onClick={() => deleteGame(game.id)} className="fa-stack fa-lg text-danger">
                <i className="fa fa-circle-o fa-stack-2x"></i>
                <i className="fa fa-trash fa-stack-1x"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

GameItem.propTypes = {
  game: PropTypes.object.isRequired,
  deleteGame: PropTypes.func.isRequired,
  setCurrentGame: PropTypes.func.isRequired
};

export default connect(
  null,
  { deleteGame, setCurrentGame }
)(GameItem);
