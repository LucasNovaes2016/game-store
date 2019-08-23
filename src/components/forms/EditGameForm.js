import React, { useState, useEffect, Fragment } from 'react'
import { Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { updateGame } from '../../actions/storeActions';


const EditGameForm = ({ current_game, updateGame }) => {

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState(false);
  const [platform, setPlatform] = useState('');
  const [finished, setFinished] = useState('');
  const [game_edited, setGameEdited] = useState(false);

  useEffect(() => {
    if (current_game) {
      setTitle(current_game.title);
      setDescription(current_game.description);
      setPlatform(current_game.platform);
      setFinished(current_game.finished)
    }
  }, [current_game]);

  const onSubmit = () => {
    if (title === '' || description === '' || platform === '') {
      // Show some toast
    } else {
      const updatedGame = {
        id: current_game.id,
        platform,
        title,
        description,
        finished
      };

      updateGame(updatedGame);

      // Clear Fields
      setTitle('');
      setDescription('');
      setPlatform('');
      setFinished(false);
      setGameEdited(true);
    }
  };

  return (
    <Fragment>
      {game_edited ? <Redirect to="/" /> : null}
      <div class="container mt-4">
        <div class="row justify-content-md-center">
          <div id="newGameFormContainer" class="col-lg-8">
            <div class="card">
              <div class="card-header text-center text-light bg-dark">
                Edite o jogo
          </div>
              <div class="card-body">
                <h5 class="card-title text-center">Atualize os campos desejados</h5>
                <form onSubmit={onSubmit}>
                  <div class="form-group">
                    <label class="font-weight-bold">Plataforma</label>
                    <select name='platform'
                      value={platform}
                      className='form-control'
                      onChange={e => setPlatform(e.target.value)}>
                      <option value='' disabled> Selecione a plataforma</option>
                      <option value="PC">PC</option>
                      <option value="Playstation"> Playstation</option>
                      <option value="Playstation 2"> Playstation 2</option>
                      <option value="Playstation 3"> Playstation 3</option>
                      <option value="Playstation 4"> Playstation 4</option>
                      <option value="Xbox"> Xbox</option>
                      <option value="Xbox 360"> Xbox 360</option>
                      <option value="Xbox One"> Xbox One</option>
                      <option value="Outra"> Outra</option>
                    </select>
                  </div>
                  <div class="form-group">
                    <label class="font-weight-bold">Nome</label>
                    <input type='text'
                      name='title'
                      value={title}
                      onChange={e => setTitle(e.target.value)}
                      className='form-control'
                      placeholder='Digite o nome do jogo...' />
                  </div>
                  <div class="form-group">
                    <label class="font-weight-bold">Descrição</label>
                    <input type='text'
                      name='description'
                      value={description}
                      onChange={e => setDescription(e.target.value)}
                      className='form-control'
                      placeholder='Digite uma descrição para o..' />
                  </div>
                  <div class="form-group form-check">
                    <input type='checkbox'
                      checked={finished}
                      value={finished}
                      onChange={e => setFinished(!finished)}
                      className='form-check-input' />
                    <label class="form-check-label">Jogo Zerado</label>
                  </div>
                </form>
              </div>
              <div class="card-footer text-center">
                <div class="d-flex justify-content-center">
                  <Link to='/games' className="btn btn-primary mx-2">Cancelar</Link>
                  <a href='#!' onClick={onSubmit} className='btn btn-danger mx-2' >
                    Atualizar </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

EditGameForm.propTypes = {
  current_game: PropTypes.object.isRequired,
  updateGame: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  current_game: state.store.current_game
});

export default connect(
  mapStateToProps,
  { updateGame }
)(EditGameForm);

