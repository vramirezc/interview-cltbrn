import { Container } from "@mui/material";
import SearchBar from "../components/SearchBar";
import OrderBy from "../components/OrderBy";
import { useEffect, useMemo, useState } from "react";
import { getPodcasts } from "../utils/getPodcasts";
import { FormatSearchResponse } from "../utils/formatSearchResponse";
import PodcastTable from "../components/PodcastTable";
import { sortList } from "../utils/SortPodcast";
import { Order, Podcast, PodcastListWithDescription } from "../types";

function SearchPodcast() {
  const [order, setOrder] = useState<Order>(Order.none);
  const [podcasts, setPodcasts] = useState<Podcast[]>([]);

  useEffect(() => {
    getPodcasts().then((data: PodcastListWithDescription[]) =>
      setPodcasts(FormatSearchResponse(data))
    );
  }, []);

  const sortedPodcasts = useMemo(
    () => sortList(podcasts, order),
    [podcasts, order]
  );

  return (
    <div className="bg-gradient-to-r from-[#1B1B1B] to-[#14151F] text-white w-full min-h-screen h-fill pt-8">
      <Container maxWidth="md">
        <SearchBar />
        <OrderBy setOrder={setOrder} order={order} />
      </Container>
      <PodcastTable podcasts={sortedPodcasts} />
    </div>
  );
}

export default SearchPodcast;
