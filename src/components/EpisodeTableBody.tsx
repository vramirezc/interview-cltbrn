import { TableBody, TableCell, TableRow } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseCircleIcon from "@mui/icons-material/PauseCircle";
import { Episode } from "../types";
import { millisToMinutesAndSeconds } from "../utils/millisToMinutesAndSeconds";
import moment from "moment";
import { useSelectedPodcast } from "../hooks/useSelectedPodcast";

function EpisodeTableBody({ episodes }: { episodes: Episode[] }) {
  const { selectedPodcast, setSelectedPodcast, setLoading } =
    useSelectedPodcast();

  const togglePlay = (row: Episode) => {
    if (selectedPodcast.trackId !== row.trackId) {
      setLoading(true);
    }
    setSelectedPodcast({
      ...row,
      episodes: episodes,
      playing:
        selectedPodcast.trackId === row.trackId
          ? !selectedPodcast.playing
          : true,
    });
  };

  return (
    <TableBody>
      {episodes.map((row, index) => (
        <TableRow
          key={row.trackId}
          sx={{
            "&:hover": { backgroundColor: "black" },
            "&:last-child td, &:last-child th": { border: 0 },
          }}
        >
          <TableCell>
            <div className="flex items-center" onClick={() => togglePlay(row)}>
              {selectedPodcast.trackId === row.trackId &&
              selectedPodcast.playing === true ? (
                <PauseCircleIcon
                  sx={{ color: "#5C67DE" }}
                  className="cursor-pointer hover:bg-white rounded-full"
                />
              ) : (
                <PlayArrowIcon className="cursor-pointer hover:bg-gray-500 rounded-full" />
              )}
            </div>
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
          <TableCell>
            <p className="text-white/30">
              {millisToMinutesAndSeconds(row.duration)}
            </p>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
}

export default EpisodeTableBody;
