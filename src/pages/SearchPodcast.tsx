import { Container } from "@mui/material";
import SearchBar from "../components/SearchBar";

function SearchPodcast() {
  return (
    <div className="bg-gradient-to-r from-[#1B1B1B] to-[#14151F] text-white w-full min-h-screen h-fill pt-8">
      <Container maxWidth="md">
        <SearchBar />
      </Container>
    </div>
  );
}

export default SearchPodcast;
