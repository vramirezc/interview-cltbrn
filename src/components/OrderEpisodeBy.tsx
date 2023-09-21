import { Dispatch, SetStateAction } from "react";
import { Episode, EpisodeResult, Order } from "../types";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import { useSelectedPodcast } from "../hooks/useSelectedPodcast";
import PauseCircleIcon from "@mui/icons-material/PauseCircle";

function OrderEpisodeBy({
  collectionInfo,
  order,
  setOrder,
  episodes,
}: {
  collectionInfo: EpisodeResult | null;
  order: string;
  setOrder: Dispatch<SetStateAction<Order>>;
  episodes: Episode[];
}) {
  const { selectedPodcast, setLoading, setSelectedPodcast } =
    useSelectedPodcast();

  const togglePlay = (rows: Episode[]) => {
    if (selectedPodcast.collectionId !== collectionInfo?.collectionId) {
      setLoading(true);
      setSelectedPodcast({
        ...rows[0],
        episodes: rows,
        playing: true,
      });
    } else {
      setSelectedPodcast({
        ...selectedPodcast,
        episodes: rows,
        playing: !selectedPodcast.playing,
      });
    }
  };

  return (
    <div className="flex justify-between">
      <div
        className="rounded-full hover:bg-white items-center flex"
        onClick={() => togglePlay(episodes)}
      >
        {selectedPodcast.playing &&
        selectedPodcast.collectionId === episodes[0].collectionId ? (
          <PauseCircleIcon sx={{ fontSize: 60, color: "#5C67DE" }} />
        ) : (
          <PlayCircleFilledIcon sx={{ fontSize: 60, color: "#5C67DE" }} />
        )}
      </div>
      <div className="text-3xl">
        {collectionInfo?.collectionName?.length! > 30
          ? collectionInfo?.collectionName.slice(0, 30) + "..."
          : collectionInfo?.collectionName}
      </div>
      <div className="min-w-[20%] pt-2">
        <FormControl fullWidth>
          <InputLabel id="order-label">Order by</InputLabel>
          <Select
            labelId="Order-by"
            id="order-select"
            value={order}
            label="Order by"
            onChange={(e) => setOrder(e.target.value as Order)}
          >
            <MenuItem value={"trackName"}>Name</MenuItem>
            <MenuItem value={"releaseDate"}>Release Date</MenuItem>
          </Select>
        </FormControl>
      </div>
    </div>
  );
}

export default OrderEpisodeBy;
