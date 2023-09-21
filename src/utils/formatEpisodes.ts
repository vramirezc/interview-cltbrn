import { Episode, EpisodeResult } from "../types";

export function formatEpisodes(episodes: EpisodeResult[]): Episode[] {
  return episodes.slice(1).map((item, index) => ({
    collectionId: item.collectionId,
    trackId: item.trackId,
    artworkUrl100: item.artworkUrl100!,
    artistName:
      episodes[0].artistName?.length! > 20
        ? episodes[0].artistName!.slice(0, 20) + "..."
        : episodes[0].artistName!,
    description:
      item.description?.length! > 40
        ? item.description!.slice(0, 40) + "..."
        : item.description!,
    trackName:
      item.trackName.length > 40
        ? item.trackName.slice(0, 40) + "..."
        : item.trackName!,
    releaseDate: item.releaseDate,
    playing: false,
    inicialTrackName: item.trackName,
    inicialTrackAudio: item.previewUrl!,
    episodeIndex: index,
    inicialArtworkUrl160: item.artworkUrl160!,
    duration: item.trackTimeMillis,
  }));
}
