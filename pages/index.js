import React, { useState } from "react";
import { Container, Form, Row } from "react-bootstrap";
import InfiniteScroll from "react-infinite-scroll-component";
import PokeCard from "../components/pokeCard";

const index = ({ pokemons }) => {
  const [searchPokemon, setSearchPokemon] = useState("");
  const [limit, setLimit] = useState(8);

  const pokemonList = pokemons
    ?.slice(0, limit)
    ?.filter((filter) => filter.name.includes(searchPokemon));

  const loadMore = () => {
    setTimeout(() => {
      setLimit(limit + 8);
    }, 500);
  };

  return (
    <Container>
      <Form.Control
        onChange={(text) => setSearchPokemon(text.target.value)}
        placeholder="Enter Poke Name"
      />
      <InfiniteScroll
        dataLength={pokemonList.length}
        hasMore={limit >= pokemonList.length}
        next={loadMore}
      >
        <Row>
          {pokemonList?.map(({ name, url }) => {
            var id = url.split("/")[6].replace("/");
            return <PokeCard name={name} id={id} />;
          })}
        </Row>
      </InfiniteScroll>
    </Container>
  );
};

index.getInitialProps = async (ctx) => {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=252");
  const json = await res.json();
  return { pokemons: json.results };
};

export default index;
