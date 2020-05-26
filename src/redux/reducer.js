export const GET_POKEMONS = 'GET_POKEMONS';
export const GET_NEXT_POKEMONS = 'GET_NEXT_POKEMONS';
export const OPEN_INFO = 'OPEN_INFO';
export const initialState = {
  pokemon: [],
  url: 'http://pokeapi.co/api/v2/pokemon/',
  limit: '?limit=12',
  nextPage: '',
  isOpen: false,
  pokemonData: {}
};

const pokedex = (state = initialState, action) => {
  switch (action.type) {
    case GET_POKEMONS:
      return ({
        ...state,
        pokemon: [...action.payload.results],
        nextPage: action.payload.next,
      });

    case GET_NEXT_POKEMONS:
      return ({
        ...state,
        pokemon: [...state.pokemon, ...action.payload.results],
        nextPage: action.payload.next,
      });

    case OPEN_INFO:
      return ({
        ...state,
        pokemonData: {...action.payload},
        isOpen: true,
      })

    default:
      return state;
  }
}
export default pokedex;
