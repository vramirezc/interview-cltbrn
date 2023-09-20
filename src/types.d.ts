export interface PodcastList {
  resultCount: number;
  results: podcastResult[];
}

export interface PodcastResult {
  wrapperType: WrapperType;
  kind: Kind;
  collectionId: number;
  trackId: number;
  artistName: string;
  collectionName: string;
  trackName: string;
  collectionCensoredName: string;
  trackCensoredName: string;
  collectionViewUrl: string;
  feedUrl: string;
  trackViewUrl: string;
  artworkUrl30: string;
  artworkUrl60: string;
  artworkUrl100: string;
  collectionPrice: number;
  trackPrice: number;
  collectionHdPrice: number;
  releaseDate: Date;
  collectionExplicitness: CollectionExplicitness;
  trackExplicitness: TrackExplicitness;
  trackCount: number;
  trackTimeMillis: number;
  country: Country;
  currency: Currency;
  primaryGenreName: string;
  contentAdvisoryRating: ContentAdvisoryRating;
  artworkUrl600: string;
  genreIds: string[];
  genres: string[];
  artistId?: number;
  artistViewUrl?: string;
}

export enum CollectionExplicitness {
  NotExplicit = "notExplicit",
}

export enum ContentAdvisoryRating {
  Clean = "Clean",
}

export enum Country {
  Esp = "ESP",
}

export enum Currency {
  Eur = "EUR",
}

export enum Kind {
  Podcast = "podcast",
}

export enum TrackExplicitness {
  Cleaned = "cleaned",
}

export enum WrapperType {
  Track = "track",
}

export interface PodcastListWithDescription {
  resultCount: number;
  results: PodcastListWithDescriptionResult[];
}

export interface PodcastListWithDescriptionResult {
  wrapperType: string;
  kind: string;
  collectionId: number;
  trackId: number;
  artistName?: string;
  collectionName: string;
  trackName: string;
  collectionCensoredName?: string;
  trackCensoredName?: string;
  collectionViewUrl: string;
  feedUrl: string;
  trackViewUrl: string;
  artworkUrl30?: string;
  artworkUrl60: string;
  artworkUrl100?: string;
  collectionPrice?: number;
  trackPrice?: number;
  collectionHdPrice?: number;
  releaseDate: Date;
  collectionExplicitness?: string;
  trackExplicitness?: string;
  trackCount?: number;
  trackTimeMillis: number;
  country: string;
  currency?: string;
  primaryGenreName?: string;
  contentAdvisoryRating: string;
  artworkUrl600: string;
  genreIds?: string[];
  genres: Array<GenreClass | string>;
  artworkUrl160?: string;
  episodeFileExtension?: string;
  episodeContentType?: string;
  artistIds?: any[];
  episodeUrl?: string;
  closedCaptioning?: string;
  episodeGuid?: string;
  description?: string;
  shortDescription?: string;
  previewUrl?: string;
}

export interface GenreClass {
  name: string;
  id: string;
}

export interface Podcast {
  collectionId: number;
  trackId: number;
  artworkUrl100: string;
  artistName: string;
  description: string;
  trackName: string;
  releaseDate: Date;
  playing: boolean;
  inicialTrackName: string;
  inicialTrackAudio: string;
  inicialArtworkUrl160: string;
  episodeIndex: number;
}
