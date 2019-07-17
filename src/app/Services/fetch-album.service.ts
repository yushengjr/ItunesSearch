import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ReturnDataModule } from '../Models/return-data/return-data.module';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FetchAlbumService {
  url : string = 'https://itunes.apple.com/search?term=';

  constructor(private httpClient:HttpClient) { }

  getAlbums(artName:string){
    return this.httpClient.get<ReturnDataModule>(`${this.url}${artName}`);
  }
}
