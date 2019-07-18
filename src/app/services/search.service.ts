import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IReturnData } from '../interface/returnData';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  itunes_url = 'https://itunes.apple.com/search?term=';
  album_url = '&entiry=album';

  constructor(private http: HttpClient) {

   }
   getAlbums(artistName): Observable<IReturnData> {
    // return this.http.get<IReturnData>(`${this.itunes_url}${artistName}${this.album_url}`);
    return this.http.get<IReturnData>(this.itunes_url + artistName + this.album_url);

   }
}
