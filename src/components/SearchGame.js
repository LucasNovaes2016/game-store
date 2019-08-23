import React, { useRef } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { searchGames, clearSearchedGames } from '../actions/storeActions';

const SearchGame = ({ searchGames, clearSearchedGames }) => {

  const text = useRef('');

  const onChange = e => {
    if (text.current.value !== '') {
      searchGames(text.current.value);
    } else {
      clearSearchedGames();
    }

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
  searchGames: PropTypes.func.isRequired,
  clearSearchedGames: PropTypes.func.isRequired
};

export default connect(
  null,
  { searchGames, clearSearchedGames }
)(SearchGame);

