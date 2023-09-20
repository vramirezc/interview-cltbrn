import { Order, Podcast } from "../types";

export function sortList(list: Podcast[], order: Order) {
  if (order === "none") return list;
  return list.toSorted((a: Podcast, b: Podcast) => {
    if (order === "releaseDate") {
      const da = new Date(a[order]) as any;
      const db = new Date(b[order]) as any;
      return db - da;
    }
    if (order === "artistName" || order === "trackName") {
      const fa = a[order]?.toLowerCase();
      const fb = b[order]?.toLowerCase();

      if (fa < fb) {
        return -1;
      }
      if (fa > fb) {
        return 1;
      }
    }
    return 0;
  });
}
