import {
  DELETE_GAME,
  GET_GAMES,
  SET_CURRENT_GAME,
  SEARCH_GAMES
} from '../actions/types';

const initialState = {
  games: [
    { id: 1, platform: 'Playstation 2', title: 'Crazy Taxi', description: 'Awesome taxi game.', finished: true },
    { id: 2, platform: 'Playstation', title: 'Crash Bandicoot', description: 'Better than Mario and Sonic.', finished: false }, { id: 3, platform: 'Playstation 2', title: 'Rayman 3', description: 'Very good game.', finished: false }
  ],
  searched_games: null,
  current_game: null,
  game_errors: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case DELETE_GAME:
      return {
        ...state,
        games: state.games.filter(game => game.id !== action.payload)
      };
    case GET_GAMES:
      return {
        ...state
      };
    case SEARCH_GAMES:
      return {
        ...state,
        searched_games: state.games.filter(game => game.title.includes(action.payload))
      };
    case SET_CURRENT_GAME:
      return {
        ...state,
        current_game: action.payload
      };
    default:
      return state;
  }
};
