import { Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

function SearchBar() {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        className="bg-stone-800 rounded-full px-2 py-1 flex items-center w-full"
      >
        <SearchIcon />
        <form className="bg-stone-800 ml-2 flex-grow w-full h-10 px-5 pr-10 rounded-full text-sm focus:outline-none">
          <input
            className="bg-stone-800 ml-2 flex-grow w-full h-10 px-5 pr-10 rounded-full text-sm focus:outline-none"
            type="text"
            placeholder="podcast"
          />
        </form>
      </Box>
    </div>
  );
}

export default SearchBar;
