import { Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Dispatch, RefObject, SetStateAction } from "react";

function SearchBar({
  setSearch,
}: {
  setSearch: Dispatch<SetStateAction<string | null>>;
}) {
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
        <SearchIcon aria-label="searchIcon" />
        <form
          aria-label="searchBarForm"
          className="bg-stone-800 ml-2 flex-grow w-full h-10 px-5 pr-10 rounded-full text-sm focus:outline-none"
          onSubmit={(e) => {
            e.preventDefault();
            const inputTarget = e.target as unknown as HTMLFormElement[];
            setSearch(inputTarget[0].value);
          }}
        >
          <label htmlFor="searchBarInput" className="hidden" />
          <input
            id="searchBarInput"
            aria-label="searchBarInput"
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
