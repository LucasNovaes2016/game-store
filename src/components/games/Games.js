import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import GameItem from './GameItem'
import PropTypes from 'prop-types';
import { getGames } from '../../actions/storeActions';

const Games = ({ store: { games, searched_games }, getGames }) => {

  useEffect(() => {
    getGames();
    // eslint-disable-next-line
  }, []);

  return (
    <div id="gamesContainer" className="row mt-4">
      {searched_games !== null ? searched_games.map(game => <GameItem game={game} key={game.id} />) : games.map(game => <GameItem game={game} key={game.id} />)}
    </div>

  )
}

Games.propTypes = {
  store: PropTypes.object.isRequired,
  getGames: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  store: state.store
});

export default connect(
  mapStateToProps,
  { getGames }
)(Games);
