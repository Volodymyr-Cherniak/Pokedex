import React, {useEffect} from "react";
import {connect} from 'react-redux';
import PokedexItem from "./PokedexItem";
import {getPokemons, getNextPokemons } from '../redux/actions';
import PokedexItemInfo from "./PokedexItemInfo";


const PokedexList = (props) => {
  const { nextPage, pokemon, isOpen } = props.state;

  useEffect(() => {
    props.getPokemons()
  }, [])


  if (!pokemon) return null;

  return (
    <div>
      <div className="card-deck mt-4">
        <div className={`${isOpen && 'col-xl-9 col-lg-9 col-md-7 col-sm-12'}`}>
          <div className="row row-cols-xl-3 row-cols-lg-3 row-cols-md-2 row-cols-sm-1 row-cols-1">
            {pokemon.map(el => <PokedexItem key={el.name} pokemon={el} url={el.url} />)}


          </div>
          <button type="button" className="btn btn-outline-primary col-12 mb-5 mt-3 text-center"
                  onClick={() => props.getNextPokemons(nextPage)}>Load more
          </button>
        </div>

        <div className="row col-xl-3 col-lg-3 col-md-5 col-sm-12 correct">
          {isOpen && <PokedexItemInfo/>}
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  state: state,
})

const mapDispatchToProps = dispatch => ({
  getPokemons: () => dispatch(getPokemons()),
  getNextPokemons: (url) => dispatch(getNextPokemons(url)),
})

export default connect(mapStateToProps, mapDispatchToProps)(PokedexList);
