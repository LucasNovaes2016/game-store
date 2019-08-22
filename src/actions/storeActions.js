import {
  GET_GAMES,
  ADD_GAME,
  DELETE_GAME,
  UPDATE_GAME,
  SET_CURRENT_GAME,
  CLEAR_CURRENT_GAME,
  CLEAR_GAMES,
  GAMES_FORM_ERROR,
  SEARCH_GAMES
} from './types';


// Delete game from state
export const deleteGame = id => {
  return {
    type: DELETE_GAME,
    payload: id
  };
};

// Get games from state
export const getGames = () => {
  return {
    type: GET_GAMES
  };
};

// Set current game
export const searchGames = search_text => {
  return {
    type: SEARCH_GAMES,
    payload: search_text
  };
};


// Set current game
export const setCurrentGame = game => {
  return {
    type: SET_CURRENT_GAME,
    payload: game
  };
};

