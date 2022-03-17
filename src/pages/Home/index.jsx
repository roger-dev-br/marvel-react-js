import Banner from "../../components/banner";
import Cards from "../../components/cards";

import React, { useState, useEffect } from "react";

import Header from "../../components/header";
import marvel from "../../services/personagens";
import { CircularProgress, Typography } from "@mui/material";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function Home() {
  const [heros, setHeroes] = useState([]);
  const [query, setQuery] = useState("");
  const history = useHistory();

  useEffect(() => {
    /*
    marvel.obtemPersonagens().then((data) => {
      setHeroes(data.results);
    });
    */
  }, []);

  useEffect(() => {
    if (!query || query === "") {
      return;
    }

    setHeroes(null);

    marvel.obtemPersonagensPorPesquisa(query).then((data) => {
      setHeroes(data.results);
      history.push(`?q=${query}`);
    });
  }, [query, history]);

  function pesquisar(termo) {
    setQuery(termo);
  }

  return (
    <>
      <Header title="Growdev - Marvel" search={pesquisar} />
      <Banner />

      {!heros && <CircularProgress />}
      {heros && heros.length > 0 && <Cards heros={heros} />}
      {heros && heros.length === 0 && (
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          sx={{ flex: 1 }}
        >
          Nenhum registro encontrado.
        </Typography>
      )}
    </>
  );
}
