import React, { useRef } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { searchGames } from '../actions/storeActions';

const SearchGame = ({ searchGames }) => {

  const text = useRef('');

  const onChange = e => {
    searchGames(text.current.value);
  };

  return (
    <div id="searchContainer" className="row mt-4">
      <div className="col-lg-6">
        <div className="input-group">
          <input id='search'
            className='form-control'
            type='search'
            placeholder='Pesquisar Jogo...'
            ref={text}
            onChange={onChange} />
          <div className="input-group-append">
            <button className="btn btn-dark" type="button">
              <i className="fa fa-search"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

SearchGame.propTypes = {
  searchGames: PropTypes.func.isRequired
};

export default connect(
  null,
  { searchGames }
)(SearchGame);

