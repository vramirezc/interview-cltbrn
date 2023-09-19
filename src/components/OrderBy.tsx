import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

function OrderBy() {
  let order = "trackName";
  return (
    <div className="pt-4 flex justify-end">
      <div className="min-w-[20%] text-white">
        <FormControl fullWidth>
          <InputLabel id="order-label">Order by</InputLabel>
          <Select
            labelId="Order-by"
            id="order-select"
            label="Order by"
            value={order}
          >
            <MenuItem value={"trackName"}>Name</MenuItem>
            <MenuItem value={"artistName"}>Artist</MenuItem>
            <MenuItem value={"releaseDate"}>Release Date</MenuItem>
          </Select>
        </FormControl>
      </div>
    </div>
  );
}

export default OrderBy;
