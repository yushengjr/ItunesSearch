export interface GetAlbumsByArtistNameResponse {
  resultCount: number;
  results: Album[];
}

export interface Album {
  collectionName: string;
  collectionViewUrl: string;
  artworkUrl100: string;
}
