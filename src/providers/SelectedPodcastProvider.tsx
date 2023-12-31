import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useState,
} from "react";
import { Episode, EpisodeResult, Order, Podcast } from "../types";

type podcast = {
  collectionId?: number;
  trackId?: number;
  playing?: boolean;
  artworkUrl100?: string;
  trackName?: string;
  artistName?: string;
  inicialTrackName?: string;
  inicialTrackAudio?: string;
  inicialArtworkUrl160?: string;
  episodeIndex?: number;
  episodes?: Episode[] | Podcast[];
};

type contextProps = {
  selectedPodcast: podcast;
  setSelectedPodcast: (value: podcast) => void;
  loading: boolean;
  setLoading: (value: boolean) => void;
  searchInput: string | null;
  setSearchInput: Dispatch<SetStateAction<string | null>>;
};

const initialContext: contextProps = {
  selectedPodcast: {},
  setSelectedPodcast: () => {},
  loading: false,
  setLoading: () => {},
  searchInput: "",
  setSearchInput: () => {},
};

export const selectedPodcastContext =
  createContext<contextProps>(initialContext);

export const SelectedPodcastProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [selectedPodcast, setSelectedPodcast] = useState<podcast>({});
  const [searchInput, setSearchInput] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  return (
    <selectedPodcastContext.Provider
      value={{
        selectedPodcast,
        setSelectedPodcast,
        loading,
        setLoading,
        searchInput,
        setSearchInput,
      }}
    >
      {children}
    </selectedPodcastContext.Provider>
  );
};
