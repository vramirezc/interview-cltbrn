import { PodcastList, PodcastResult } from "../types";

export async function getPodcasts() {
  const response = await fetch(
    "https://itunes.apple.com/search?term=podcast&country=ES&media=podcast&entity=podcast&limit=50"
  );
  const data: PodcastList = await response.json();
  const collectionIdsURLS = data.results.map(
    (item: PodcastResult) =>
      `https://itunes.apple.com/lookup?id=${item.collectionId}&country=ES&media=podcast&entity=podcastEpisode&limit=1`
  );
  const descriptions = await Promise.all(
    collectionIdsURLS.map(async (url: string) => fetch(url))
  );
  return await Promise.all(descriptions.map((d) => d.json()));
}
