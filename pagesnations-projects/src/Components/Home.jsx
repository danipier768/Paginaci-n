import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Pagination from "./Pagination";
import Cookies from "js-cookie";
const Home = ({}) => {
  const [data, setData] = useState(null);
  const [currentPage, setCurrentPage] = useState(
    Cookies.get("currentPage") ? parseInt(Cookies.get("currentPage")) : 1
  );
  const itemsPerPage = 20;

  useEffect(() => {
    const fetchData = async () => {
      const offset = (currentPage - 1) * itemsPerPage;
      const res = await fetch(
        `https://pokeapi.co/api/v2/pokemon?limit=${itemsPerPage}&offset=${offset}`
      );
      const result = await res.json();
      setData(result);
    };
    fetchData();

    Cookies.set("currentPage", currentPage)
  }, [currentPage]);

  const capitalizeFirstLetter = (string) =>
    string ? string[0].toUpperCase() + string.slice(1) : "";

  return (
    <>
      <div className="container">
        <div className="d-flex justify-content-center py-4">
          <h1>PokeApi</h1>
        </div>
        <div className="row mb-5 ">
          {data?.results?.map((pokemon) => (
            <div
              className="col-3 pokemons-container border border-success-subtle py-5"
              key={pokemon.url}
            >
              <Link className="p-4 text-black" to={`/details/${pokemon.name}`}>
                {capitalizeFirstLetter(pokemon.name)}
              </Link>
            </div>
          ))}
        </div>
        <div className="col-12 d-flex justify-content-center mt-5">
          <Pagination
            currentPage={currentPage}
            onPageChange={setCurrentPage}
            totalPages={Math.ceil((data?.count || 0) / itemsPerPage)}
          />
        </div>
      </div>
    </>
  );
};

export default Home;
