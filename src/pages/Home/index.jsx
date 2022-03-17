import Banner from "../../components/banner";
import Cards from "../../components/cards";

import React, { useState, useEffect } from "react";

import Header from "../../components/header";
import marvel from "../../services/personagens";
import { Button, CircularProgress, Typography } from "@mui/material";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Box } from "@mui/system";

export default function Home() {
  // Crio o estado para a lista local de personagens
  const [heros, setHeroes] = useState([]);
  // Crio o estado para monitorar a pesquisa por nome
  const [query, setQuery] = useState("");
  // crio o useHistory para simular a navegação
  const history = useHistory();
  // crio um estado para controlar o offset
  // e atualizar a lista ao clicar em carregar mais
  const [offset, setOffSet] = useState(0);

  useEffect(() => {
    // ao carregar a página busca os primeiros personagens
    marvel.obtemPersonagens(offset).then((data) => {
      // atualiza o estado para desenhar na tela os cards
      setHeroes([...heros, ...data.results]);
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [offset]);

  useEffect(() => {
    // caso o termo de pesquisa seja em branco, não faz nada
    if (!query || query === "") {
      return;
    }

    // limpa a lista atual
    setHeroes(null);

    // busca na API da marvel pelo nome digitado
    marvel.obtemPersonagensPorPesquisa(query).then((data) => {
      // atualiza a lista local com o retorno da api
      setHeroes(data.results);
      // altero o histórico do navegador
      history.push(`?q=${query}`);
    });
  }, [query, history]);

  function pesquisar(termo) {
    // altero o termo de pesquisa para disparar o
    // useEffect que monitora a "query"
    setQuery(termo);
  }

  return (
    <>
      {/* Crio o header passando como prop a 
        função de pesquisa para rodar no Home      
      */}
      <Header title="Growdev - Marvel" search={pesquisar} />
      {/* Banner da Wanda */}
      <Banner />

      {/* Enquanto a lista for nula mostra o progressor */}
      {!heros && <CircularProgress />}

      {/* A lista não é nula e tem resultados mostra os cards */}
      {heros && heros.length > 0 && (
        <>
          <Cards heros={heros} />
          <Box
            textAlign="center"
            sx={{
              mb: 4,
            }}
          >
            <Button onClick={() => setOffSet(offset + 20)}>
              Carregar mais
            </Button>
          </Box>
        </>
      )}

      {/* A Lista não é nula, mas nao tem itens, 
        mostra a informação de not found 
      */}
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
