import axios from 'axios'
import {initialState} from './reducer';
import {
  GET_NEXT_POKEMONS,
  GET_POKEMONS,
  OPEN_INFO,
} from "./reducer";


export function getPokemons() {
  return async (dispatch) => {
    await axios
      .get(initialState.url + initialState.limit)
      .then(({data}) => {
        dispatch({
          type: GET_POKEMONS,
          payload: data,
        })
      })
      .catch(err => err);
  }
}

export function getNextPokemons(url) {
  return async (dispatch) => {
    await axios
      .get(url)
      .then(({data}) => {
        dispatch({
          type: GET_NEXT_POKEMONS,
          payload: data,
        })
      })
      .catch(err => err);
  }
}

export function openInfo(args) {
  return {type: OPEN_INFO, payload: args}
}


