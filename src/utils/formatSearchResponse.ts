import { Podcast, PodcastListWithDescription } from "../types";

export function FormatSearchResponse(
  list: PodcastListWithDescription[]
): Podcast[] {
  return list.map((item, index) => ({
    collectionId: item.results[0].collectionId,
    trackId: item.results[1].trackId,
    artworkUrl100: item.results[0].artworkUrl100!,
    artistName:
      item.results[0].artistName!.length > 20
        ? item.results[0].artistName!.slice(0, 20) + "..."
        : item.results[0].artistName!,
    description:
      item.results[1].description!.length > 40
        ? item.results[1].description!.slice(0, 40) + "..."
        : item.results[1].description!,
    trackName: item.results[0].trackName,
    releaseDate: item.results[1].releaseDate,
    playing: false,
    inicialTrackName: item.results[1].trackName,
    inicialTrackAudio: item.results[1].previewUrl!,
    inicialArtworkUrl160: item.results[1].artworkUrl160!,
    episodeIndex: index,
  }));
}
