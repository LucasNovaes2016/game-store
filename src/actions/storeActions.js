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

// Get Games from state
export const getGames = () => {
  return {
    type: GET_GAMES
  };
};

