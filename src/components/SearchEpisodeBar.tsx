import { Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useNavigate } from "react-router-dom";
import { Dispatch, SetStateAction } from "react";

function SearchEpisodeBar({
  setSearchEpisodeInput,
}: {
  setSearchEpisodeInput: Dispatch<SetStateAction<string>>;
}) {
  const navigate = useNavigate();
  return (
    <div className="flex items-center gap-2">
      <ArrowBackIosNewIcon
        className="bg-stone-800 rounded-full px-2 py-1 flex items-center w-full cursor-pointer"
        sx={{ fontSize: 40 }}
        onClick={() => {
          navigate(-1);
        }}
      />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        className="bg-stone-800 rounded-full px-2 py-1 flex items-center w-full"
      >
        <SearchIcon />
        <form
          className="bg-stone-800 ml-2 flex-grow w-full h-10 px-5 pr-10 rounded-full text-sm focus:outline-none"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <input
            className="bg-stone-800 ml-2 flex-grow w-full h-10 px-5 pr-10 rounded-full text-sm focus:outline-none"
            type="text"
            placeholder="podcast"
            onChange={(e) => setSearchEpisodeInput(e.target.value)}
          />
        </form>
      </Box>
    </div>
  );
}

export default SearchEpisodeBar;
