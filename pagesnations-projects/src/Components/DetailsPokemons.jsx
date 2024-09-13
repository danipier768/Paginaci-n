import React, { useEffect, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import Cookies from "js-cookie";

const DetailsPokemons = () => {
    const { id } = useParams();
    const [pokemon, setPokemon] = useState(null);
    const naviagte = useNavigate();
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((response) => response.json())
      .then((jsonData) => setPokemon(jsonData))
      .catch((error) => console.error("Error en el fetchin de data", error));
  }, [id]);


  const capitalizeFirstLetter = (string) => string ? string[0].toUpperCase() + string.slice(1) : ''

  console.log(pokemon);
  

  if (!pokemon) {
    return <div>Cargando detalles del Pokémon...</div>;
  }

  return (
    <div className="container d-flex justify-content-center ">
      <div className="row cards my-5">
        <div className="col-12 d-flex justify-content-center">
          <h1>{capitalizeFirstLetter(pokemon.name)}</h1>
        </div>
        <div className="col-12 d-flex justify-content-center">
          {pokemon.sprites?.front_default ? (
            <img
              className=""
              src={pokemon.sprites.front_default}
              alt={pokemon.name}
            ></img>
          ) : (
            <p>imagen no disponible</p>
          )}
        </div>

        <div className="col-6">
          <p>Altura: {pokemon.height}</p>
        </div>
        <div className="col-6">
          <p>Peso: {pokemon.weight}</p>
        </div>
        <div className="col-6">
          <p>Experiencia: {pokemon.base_experience}</p>
        </div>
        <div className="col-6">
          <p>Especie: {pokemon.species.name}</p>
        </div>

        <div className="col-12 d-flex justify-content-center p-3">
          <button onClick={() => naviagte(`/?page=${Cookies.get("currentPage") || 1 }`) }>Volver</button>
        </div>
      </div>
    </div>
  );
};

export default DetailsPokemons;
