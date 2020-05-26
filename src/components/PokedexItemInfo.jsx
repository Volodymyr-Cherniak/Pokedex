import React from "react";
import {connect} from "react-redux";


function PokedexItem(props) {
  const {pokemonData} = props;
  const nameCapitalized = pokemonData.name.charAt(0).toUpperCase() + pokemonData.name.slice(1);

  const addZeroToId = (num) => {
    if (num.toString().length < 2) return "00" + num;
    else if (num.toString().length < 3) return "0" + num;
    return num.toString();
  }

  if (!pokemonData) return null

  return (
    <div className="col-12">
      <div className="card shadow bg-white rounded correct sticky-top ">
        <img src={pokemonData.sprites.front_default}
             className="card-img-top p-3" alt="img"/>

        <div className="card-body m-1">
          <p className="card-text text-center"><strong>{nameCapitalized + '  #'+  addZeroToId(pokemonData.id)}</strong></p>
        </div>

        <ul className="list-group list-group-flush small border m-1">
          <li className="list-group-item d-flex justify-content-between p-1 pl-2 pr-2">
            <span>Type</span>

            <div>
              {pokemonData.types.map(el => <span key={Math.random()}>{el.type.name + ' '}</span>)}
            </div>
          </li>

          <li className="list-group-item d-flex justify-content-between p-1 pl-2 pr-2">
            <span className='text-sm-center'>Attack</span>
            <span>{pokemonData.stats[4].base_stat}</span>
          </li>

          <li className="list-group-item d-flex justify-content-between p-1 pl-2 pr-2">
            <span>Defence</span>
            <span>{pokemonData.stats[3].base_stat}</span>
          </li>

          <li className="list-group-item d-flex justify-content-between p-1 pl-2 pr-2">
            <span>HP</span>
            <span>{pokemonData.stats[5].base_stat}</span>
          </li>

          <li className="list-group-item d-flex justify-content-between p-1 pl-2 pr-2">
            <span>SP Attack</span>
            <span>{pokemonData.stats[2].base_stat}</span>
          </li>

          <li className="list-group-item d-flex justify-content-between p-1 pl-2 pr-2">
            <span>SP Defence</span>
            <span>{pokemonData.stats[1].base_stat}</span>
          </li>

          <li className="list-group-item d-flex justify-content-between p-1 pl-2 pr-2">
            <span>Speed</span>
            <span>{pokemonData.stats[0].base_stat}</span>
          </li>

          <li className="list-group-item d-flex justify-content-between p-1 pl-2 pr-2">
            <span>Weight</span>
            <span>{pokemonData.weight}</span>
          </li>

          <li className="list-group-item d-flex justify-content-between p-1 pl-2 pr-2">
            <span>Total moves</span>
            <span>{pokemonData.moves.length}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  pokemonData: state.pokemonData,
})

export default connect(mapStateToProps, null)(PokedexItem);
