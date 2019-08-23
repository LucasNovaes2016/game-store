import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addGame } from '../../actions/storeActions';

const AddGameForm = ({ addGame }) => {

  const [platform, setPlatform] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [finished, setFinished] = useState(false);

  const onSubmit = () => {
    if (title === '' || description === '' || platform === '') {
      // Mensagem de erro no alert
    } else {

      addGame({
        platform,
        title,
        description,
        finished
      });

      // Mensagem dizendo que um jogo foi adicionado

      // Clear Fields
      setPlatform('');
      setTitle('');
      setDescription('');
      setFinished(false);
    }
  };


  return (
    <div class="container mt-4">
      <div class="row justify-content-md-center">
        <div class="col-lg-8 alert alert-danger alert-dismissible fade show" role="alert">
          Por favor, preencha todos os campos!
			  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div id="newGameFormContainer" class="col-lg-8 p-0">
          <div class="card">
            <div class="card-header text-center text-light bg-dark">
              Adicione um jogo a sua coleção
          </div>
            <div class="card-body">
              <h5 class="card-title text-center">Preencha os campos abaixo</h5>
              <form>
                <div class="form-group">
                  <label class="font-weight-bold">Plataforma</label>
                  <select name='platform'
                    value={platform}
                    className='form-control'
                    onChange={e => setPlatform(e.target.value)} >
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
                  <input type='text' name='title' value={title} onChange={e => setTitle(e.target.value)} className="form-control" placeholder="Digite o nome do jogo" />
                </div>
                <div class="form-group">
                  <label class="font-weight-bold">Descrição</label>
                  <input type='text' name='description' value={description} onChange={e => setDescription(e.target.value)} className="form-control" placeholder="Digite uma descrição pra o jogo" />
                </div>
                <div class="form-group form-check">
                  <input type='checkbox'
                    className='filled-in'
                    checked={finished}
                    value={finished}
                    onChange={e => setFinished(!finished)} />
                  <label class="form-check-label">Jogo Zerado</label>
                </div>
              </form>
            </div>
            <div class="card-footer text-center">
              <div class="d-flex justify-content-center">
                <Link to='/games' className="btn btn-primary mx-2">Cancelar</Link>
                <a
                  href='#!'
                  onClick={onSubmit}
                  className='btn btn-danger mx-2'
                >Adicionar</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

AddGameForm.propTypes = {
  addGame: PropTypes.func.isRequired
};

export default connect(
  null,
  { addGame }
)(AddGameForm);

