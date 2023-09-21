import { TableBody, TableCell, TableRow } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseCircleIcon from "@mui/icons-material/PauseCircle";
import moment from "moment";
import { Podcast } from "../types";
import { useNavigate } from "react-router-dom";
import { useSelectedPodcast } from "../hooks/useSelectedPodcast";

function PodcastTableBody({ podcasts }: { podcasts: Podcast[] }) {
  const navigate = useNavigate();
  const { selectedPodcast, setLoading, setSelectedPodcast } =
    useSelectedPodcast();

  const togglePlay = (
    e: React.MouseEvent<HTMLTableCellElement, MouseEvent>,
    row: Podcast,
    rows: Podcast[]
  ) => {
    e.stopPropagation();
    if (selectedPodcast.collectionId !== row?.collectionId) {
      setLoading(true);
    }
    setSelectedPodcast({
      ...row,
      episodes: rows,
      playing:
        selectedPodcast.collectionId === row?.collectionId
          ? !selectedPodcast.playing
          : true,
    });
  };

  return (
    <TableBody>
      {podcasts.map((row: Podcast) => (
        <TableRow
          className="cursor-pointer"
          key={row.collectionId}
          sx={{
            "&:hover": { backgroundColor: "black" },
            "&:last-child td, &:last-child th": { border: 0 },
          }}
          onClick={() => navigate(`/${row.collectionId}`)}
        >
          <TableCell onClick={(e) => togglePlay(e, row, podcasts)}>
            {selectedPodcast.collectionId === row.collectionId &&
            selectedPodcast.playing === true ? (
              <PauseCircleIcon
                sx={{ color: "#5C67DE" }}
                className="hover:bg-white rounded-full"
              />
            ) : (
              <PlayArrowIcon className="hover:bg-gray-500 rounded-full" />
            )}
          </TableCell>
          <TableCell>
            <div className="flex items-center gap-3 w-50 ">
              <img src={row.inicialArtworkUrl160} className="w-10 rounded" />
              <div>
                <p className="text-white/70">{row.trackName}</p>
                <p className="text-white/30 text-xs">{row.artistName}</p>
              </div>
            </div>
          </TableCell>
          <TableCell>
            <p className="text-white/30 w-44">{row.description}</p>
          </TableCell>
          <TableCell>
            <p className="text-white/30">{moment(row.releaseDate).fromNow()}</p>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
}

export default PodcastTableBody;
