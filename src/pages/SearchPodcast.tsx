import { Container } from "@mui/material";
import SearchBar from "../components/SearchBar";
import OrderBy from "../components/OrderBy";
import { useEffect, useState } from "react";
import { getPodcasts } from "../utils/getPodcasts";
import { Podcast, PodcastListWithDescription } from "../types";
import { FormatSearchResponse } from "../utils/formatSearchResponse";
import PodcastTable from "../components/PodcastTable";

function SearchPodcast() {
  const [podcasts, setPodcasts] = useState<Podcast[]>([]);
  useEffect(() => {
    getPodcasts().then((data: PodcastListWithDescription[]) =>
      setPodcasts(FormatSearchResponse(data))
    );
  }, []);

  return (
    <div className="bg-gradient-to-r from-[#1B1B1B] to-[#14151F] text-white w-full min-h-screen h-fill pt-8">
      <Container maxWidth="md">
        <SearchBar />
        <OrderBy />
      </Container>
      <PodcastTable podcasts={podcasts} />
    </div>
  );
}

export default SearchPodcast;
