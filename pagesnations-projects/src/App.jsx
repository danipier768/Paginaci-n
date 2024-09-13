
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Components/Home.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DetailsPokemons from "./Components/DetailsPokemons.jsx";
import { useEffect, useState } from "react";
function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=20&offset=0")
      .then((response) => response.json())
      .then((jsonData) => setData(jsonData))
      .catch((error) => console.error("Error en el fetching data", error));
  }, []);
  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home data={data} />} />
        <Route path="/details/:id" element={<DetailsPokemons />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
