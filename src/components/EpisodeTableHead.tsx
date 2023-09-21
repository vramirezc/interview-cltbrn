import { TableCell, TableHead, TableRow } from "@mui/material";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";

function EpisodeTableHead() {
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
        <TableCell>
          <AccessTimeOutlinedIcon
            fontSize="small"
            sx={{ color: "rgb(255, 255, 255, 0.2)" }}
          />
        </TableCell>
      </TableRow>
    </TableHead>
  );
}

export default EpisodeTableHead;
