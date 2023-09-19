import { Routes, Route, BrowserRouter } from "react-router-dom";
import SearchPodcast from "./pages/SearchPodcast";
import ViewPodcast from "./pages/ViewPodcast";
import { ThemeProvider } from "@mui/material/styles";
import { useDarkTheme } from "./hooks/useDarkTheme";
import CssBaseline from "@mui/material/CssBaseline";

function App() {
  const theme = useDarkTheme();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SearchPodcast />} />
          <Route path="/:collectionId" element={<ViewPodcast />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
