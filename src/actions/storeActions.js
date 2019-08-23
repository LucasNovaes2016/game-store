import {
  GET_GAMES,
  ADD_GAME,
  DELETE_GAME,
  UPDATE_GAME,
  SET_CURRENT_GAME,
  CLEAR_CURRENT_GAME,
  SEARCH_GAMES,
  CLEAR_SEARCHED_GAMES,
} from './types';

// Delete game from state
export const addGame = (game) => {

  // Generate random id
  const uuidv1 = require('uuid/v1');
  uuidv1();

  game.id = uuidv1();

  return {
    type: ADD_GAME,
    payload: game
  };
};

// Delete game from state
export const clearSearchedGames = () => {
  return {
    type: CLEAR_SEARCHED_GAMES
  };
};

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

// update game
export const updateGame = (game) => {
  return {
    type: UPDATE_GAME,
    payload: game
  };
};

