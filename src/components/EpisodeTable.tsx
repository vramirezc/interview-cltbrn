import { Paper, Table, TableContainer } from "@mui/material";
import { Episode } from "../types";

import EpisodeTableHead from "./EpisodeTableHead";
import EpisodeTableBody from "./EpisodeTableBody";

function EpisodeTable({ episodes }: { episodes: Episode[] }) {
  return (
    <TableContainer component={Paper} className="mt-2">
      <Table aria-label="simple table">
        <EpisodeTableHead />
        <EpisodeTableBody episodes={episodes} />
      </Table>
    </TableContainer>
  );
}

export default EpisodeTable;
