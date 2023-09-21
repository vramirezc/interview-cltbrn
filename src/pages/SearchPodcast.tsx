import { Container } from "@mui/material";
import SearchBar from "../components/SearchBar";
import OrderBy from "../components/OrderBy";
import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { getPodcasts } from "../utils/getPodcasts";
import { FormatSearchResponse } from "../utils/formatSearchResponse";
import PodcastTable from "../components/PodcastTable";
import { sortList } from "../utils/SortPodcast";
import { Order, Podcast, PodcastListWithDescription } from "../types";
import { useSelectedPodcast } from "../hooks/useSelectedPodcast";

function SearchPodcast() {
  const [order, setOrder] = useState<Order>(Order.none);
  const [podcasts, setPodcasts] = useState<Podcast[]>([]);
  const [loading, setLoading] = useState(false);
  const { searchInput, setSearchInput } = useSelectedPodcast();

  useEffect(() => {
    setLoading(true);
    getPodcasts(searchInput)
      .then((data: PodcastListWithDescription[]) =>
        setPodcasts(FormatSearchResponse(data))
      )
      .catch((err) => console.log(err.message))
      .finally(() => setLoading(false));
  }, [searchInput]);

  const sortedPodcasts = useMemo(
    () => sortList(podcasts, order),
    [podcasts, order]
  );

  return (
    <div className="bg-gradient-to-r from-[#1B1B1B] to-[#14151F] text-white w-full min-h-screen h-fill pt-8">
      <Container maxWidth="md">
        <SearchBar setSearch={setSearchInput} />
        <OrderBy setOrder={setOrder} order={order} />
        <PodcastTable loading={loading} podcasts={sortedPodcasts} />
      </Container>
    </div>
  );
}

export default SearchPodcast;
