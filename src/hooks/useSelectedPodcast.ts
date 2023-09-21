import { selectedPodcastContext } from "../providers/SelectedPodcastProvider";
import { useContext } from "react";

export function useSelectedPodcast() {
  return useContext(selectedPodcastContext);
}
