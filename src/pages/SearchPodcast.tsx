import { Container } from "@mui/material";
import SearchBar from "../components/SearchBar";
import OrderBy from "../components/OrderBy";
import { useEffect, useState } from "react";
import { getPodcasts } from "../utils/getPodcasts";

function SearchPodcast() {
  const [podcasts, setPodcasts] = useState([]);
  useEffect(() => {
    getPodcasts().then((data) => console.log(data));
  }, []);

  return (
    <div className="bg-gradient-to-r from-[#1B1B1B] to-[#14151F] text-white w-full min-h-screen h-fill pt-8">
      <Container maxWidth="md">
        <SearchBar />
        <OrderBy />
      </Container>
    </div>
  );
}

export default SearchPodcast;
