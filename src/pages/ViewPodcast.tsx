import { useEffect, useMemo, useState } from "react";
import { Episode, EpisodeResult, Order } from "../types";
import { useParams } from "react-router-dom";
import { getEpisodes } from "../utils/getEpisodes";
import { Container } from "@mui/material";
import SearchEpisodeBar from "../components/SearchEpisodeBar";
import { formatEpisodes } from "../utils/formatEpisodes";
import OrderEpisodeBy from "../components/OrderEpisodeBy";
import { sortList } from "../utils/SortPodcast";
import EpisodeTable from "../components/EpisodeTable";
import LoadingSpinner from "../components/LoadingSpinner";

function ViewPodcast() {
  const { collectionId } = useParams();
  const [episodes, setEpisodes] = useState<Episode[]>([]);
  const [collectionInfo, setCollectionInfo] = useState<EpisodeResult | null>(
    null
  );
  const [loading, setLoading] = useState(false);
  const [order, setOrder] = useState<Order>(Order.none);
  const [searchEpisodeInput, setSearchEpisodeInput] = useState<string>("");

  useEffect(() => {
    setLoading(true);
    getEpisodes(collectionId!)
      .then((data) => {
        setCollectionInfo(data[0]);
        setEpisodes(formatEpisodes(data.slice(1)));
      })
      .catch((err) => console.log(err.message))
      .finally(() => setLoading(false));
  }, []);

  const sortedEpisodes = useMemo(() => {
    return sortList(episodes, order) as Episode[];
  }, [episodes, order]);

  const filteredEpisodes = useMemo(
    () =>
      sortedEpisodes.filter((episode) =>
        episode.trackName
          .toLowerCase()
          .includes(searchEpisodeInput.toLowerCase())
      ),
    [sortedEpisodes, searchEpisodeInput]
  );

  return (
    <div className="bg-gradient-to-r from-[#1B1B1B] to-[#14151F] text-white w-full min-h-screen h-fill pt-8">
      <Container maxWidth="md">
        <SearchEpisodeBar setSearchEpisodeInput={setSearchEpisodeInput} />
        {loading ? (
          <LoadingSpinner />
        ) : (
          <>
            <img
              src={collectionInfo?.artworkUrl600}
              className="object-cover w-full h-60 rounded-xl mt-4"
            />
            <OrderEpisodeBy
              episodes={filteredEpisodes}
              order={order}
              setOrder={setOrder}
              collectionInfo={collectionInfo}
            />
            <EpisodeTable episodes={filteredEpisodes} />
          </>
        )}
      </Container>
    </div>
  );
}

export default ViewPodcast;
