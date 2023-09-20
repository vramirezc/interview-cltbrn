import { Paper, Table, TableContainer } from "@mui/material";
import { Podcast } from "../types";
import LoadingSpinner from "./LoadingSpinner";
import PodcastTableHead from "./PodcastTableHead";
import PodcastTableBody from "./PodcastTableBody";

function PodcastTable({ podcasts }: { podcasts: Podcast[] }) {
  return podcasts.length === 0 ? (
    <LoadingSpinner />
  ) : (
    <>
      <div className="w-[90%] m-auto">
        <TableContainer component={Paper} className="my-5">
          <Table aria-label="simple table">
            <PodcastTableHead />
            <PodcastTableBody podcasts={podcasts} />
          </Table>
        </TableContainer>
      </div>
    </>
  );
}

export default PodcastTable;
