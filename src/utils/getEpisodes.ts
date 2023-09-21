export async function getEpisodes(collectionId: string) {
  const response = await fetch(
    `https://corsproxy.io/?https://itunes.apple.com/lookup?id=${collectionId}&country=ES&media=podcast&entity=podcastEpisode&limit=200`
  );
  const data = await response.json();
  return data.results;
}
