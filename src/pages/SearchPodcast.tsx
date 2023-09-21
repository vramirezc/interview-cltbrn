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
  const [search, setSearch] = useState<string | null>(null);
  const [podcasts, setPodcasts] = useState<Podcast[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    getPodcasts(search)
      .then((data: PodcastListWithDescription[]) =>
        setPodcasts(FormatSearchResponse(data))
      )
      .catch((err) => console.log(err.message))
      .finally(() => setLoading(false));
  }, [search]);

  const sortedPodcasts = useMemo(
    () => sortList(podcasts, order),
    [podcasts, order]
  );

  return (
    <div className="bg-gradient-to-r from-[#1B1B1B] to-[#14151F] text-white w-full min-h-screen h-fill pt-8">
      <Container maxWidth="md">
        <SearchBar setSearch={setSearch} />
        <OrderBy setOrder={setOrder} order={order} />
        <PodcastTable loading={loading} podcasts={sortedPodcasts} />
      </Container>
    </div>
  );
}

export default SearchPodcast;
