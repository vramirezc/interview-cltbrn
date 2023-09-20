import { TableCell, TableHead, TableRow } from "@mui/material";

function PodcastTableHead() {
  return (
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
  );
}

export default PodcastTableHead;
