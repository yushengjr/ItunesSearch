export class Artist {
  public id: string;
  public name: string;
  public albumName: string;
  public albumCover: string;
  constructor( artistResponse: any ) {
    this.id = artistResponse.artistId;
    this.name = artistResponse.artistName;
    this.albumName = artistResponse.collectionName;
    this.albumCover = artistResponse.artworkUrl100;
  }
}
