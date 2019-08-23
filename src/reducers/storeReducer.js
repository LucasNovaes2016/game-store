import {
  ADD_GAME,
  DELETE_GAME,
  GET_GAMES,
  SET_CURRENT_GAME,
  SEARCH_GAMES,
  CLEAR_SEARCHED_GAMES,
  UPDATE_GAME
} from '../actions/types';

const initialState = {
  games: [
    { id: 1, platform: 'Playstation 2', title: 'Crazy Taxi', description: 'Awesome taxi game.', finished: true },
    { id: 2, platform: 'Playstation', title: 'Crash Bandicoot', description: 'Better than Mario and Sonic.', finished: false }, { id: 3, platform: 'Playstation 2', title: 'Rayman 3', description: 'Very good game.', finished: false }
  ],
  searched_games: null,
  current_game: null,
  game_errors: null,
  alert: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_GAME:
      return {
        ...state,
        games: [...state.games, action.payload]
      };
    case CLEAR_SEARCHED_GAMES:
      return {
        ...state,
        searched_games: null
      };
    case DELETE_GAME:
      return {
        ...state,
        games: state.games.filter(game => game.id !== action.payload),
        searched_games: null
      };
    case GET_GAMES:
      return {
        ...state
      };
    case SEARCH_GAMES:
      return {
        ...state,
        searched_games: state.games.filter(game => game.title.toLowerCase().includes(action.payload.toLowerCase()))
      };
    case SET_CURRENT_GAME:
      return {
        ...state,
        current_game: action.payload
      };
    case UPDATE_GAME:
      return {
        ...state,
        games: state.games.map(game =>
          game.id === action.payload.id ? action.payload : game
        )
      };
    default:
      return state;
  }
};
