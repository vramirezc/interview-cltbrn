import { Routes, Route, BrowserRouter } from "react-router-dom";
import SearchPodcast from "./pages/SearchPodcast";
import ViewPodcast from "./pages/ViewPodcast";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SearchPodcast />} />
        <Route path="/:collectionId" element={<ViewPodcast />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
