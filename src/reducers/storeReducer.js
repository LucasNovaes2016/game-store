import {
  GET_GAMES
} from '../actions/types';

const initialState = {
  games: [
    { plataform: 'Playstation 2', title: 'Crazy Taxi', description: 'Awesome taxi game.', finished: true },
    { plataform: 'Playstation', title: 'Crash Bandicoot', description: 'Better than Mario and Sonic.', finished: false }, { plataform: 'Playstation 2', title: 'Rayman 3', description: 'Very good game.', finished: false }
  ],
  current_game: null,
  game_errors: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_GAMES:
      return {
        ...state
      };
    default:
      return state;
  }
};
