import { Dispatch, SetStateAction } from "react";
import { EpisodeResult, Order } from "../types";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";

function OrderEpisodeBy({
  collectionInfo,
  order,
  setOrder,
}: {
  collectionInfo: EpisodeResult | null;
  order: string;
  setOrder: Dispatch<SetStateAction<Order>>;
}) {
  return (
    <div className="flex justify-between">
      <div className="rounded-full hover:bg-white items-center flex">
        <PlayCircleFilledIcon sx={{ fontSize: 60, color: "#5C67DE" }} />
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
