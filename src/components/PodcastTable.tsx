import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { Podcast } from "../types";
import moment from "moment";
import LoadingSpinner from "./LoadingSpinner";

function PodcastTable({ podcasts }: { podcasts: Podcast[] }) {
  return podcasts.length === 0 ? (
    <LoadingSpinner />
  ) : (
    <>
      <div className="w-[90%] m-auto">
        <TableContainer component={Paper} className="my-5">
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>
                  <p className="text-white/30 text-xs">#</p>
                </TableCell>
                <TableCell>
                  <p className="text-white/30 text-xs">Name</p>
                </TableCell>
                <TableCell>
                  <p className="text-white/30 text-xs">Description</p>
                </TableCell>
                <TableCell>
                  <p className="text-white/30 text-xs">Released</p>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {podcasts.map((row: Podcast) => (
                <TableRow
                  className="cursor-pointer"
                  key={row.collectionId}
                  sx={{
                    "&:hover": { backgroundColor: "black" },
                    "&:last-child td, &:last-child th": { border: 0 },
                  }}
                >
                  <TableCell>
                    <PlayArrowIcon className="hover:bg-gray-500 rounded-full" />
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-3 w-50 ">
                      <img
                        src={row.inicialArtworkUrl160}
                        className="w-10 rounded"
                      />
                      <div>
                        <p className="text-white/70">{row.trackName}</p>
                        <p className="text-white/30 text-xs">
                          {row.artistName}
                        </p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <p className="text-white/30 w-44">{row.description}</p>
                  </TableCell>
                  <TableCell>
                    <p className="text-white/30">
                      {moment(row.releaseDate).fromNow()}
                    </p>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
}

export default PodcastTable;
