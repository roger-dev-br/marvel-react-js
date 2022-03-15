import Banner from "../../components/banner";
import Cards from "../../components/cards";

import React, { useState, useEffect } from "react";

import Header from "../../components/header";
import marvel from "../../services/personagens";
import { CircularProgress } from "@mui/material";

export default function Home() {
  const [heros, setHeroes] = useState([]);

  useEffect(() => {
    marvel.obtemPersonagens().then((data) => {
      setHeroes(data.results);
    });
  }, []);

  return (
    <>
      <Header title="Growdev - Marvel" />
      <Banner />

      {heros.length === 0 && <CircularProgress />}
      {heros.length > 0 && <Cards heros={heros} />}
    </>
  );
}
