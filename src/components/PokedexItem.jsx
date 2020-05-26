import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import axios from "axios";
import {openInfo} from "../redux/actions";


function PokedexItem(props) {
  const {name, url} = props.pokemon;
  const [pokemonData, setPokemonData] = useState('');
  const nameCapitalized = name.charAt(0).toUpperCase() + name.slice(1);

  useEffect(() => {
    axios.get(url)
      .then((res) => setPokemonData(res.data))
      .catch(err => err);
  }, [url]);


  if (!pokemonData) return null

  return (
    <div className="col mb-3">
      <div className="card shadow bg-white rounded size">
        <img src={pokemonData.sprites.front_default}
               className="card-img-top p-3" alt="img" onClick={() => props.openInfo(pokemonData)}/>

        <div className="card-body">
          <p className="card-text text-center"><strong>{nameCapitalized}</strong></p>
        </div>

        <footer className="card-footer">
          {pokemonData.types.map((el) => <span className={`badge ${el.type.name} ml-1`}
                                               key={el.type.name}>{el.type.name}</span>)}
        </footer>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  pokemonData: state.pokemonData
})

const mapDispatchToProps = dispatch => ({
  openInfo: (arg) => dispatch(openInfo(arg)),
})

export default connect(mapStateToProps, mapDispatchToProps)(PokedexItem);
