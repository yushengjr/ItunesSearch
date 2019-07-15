import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})

export class ArtistService {

  constructor(private http: HttpClient) { }

  getArtistInfo (artist: string) {
    const requestOptions = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Headers': 'Content-Type',
    });
    return this.http.get(`https://itunes.apple.com/search?term=${artist}`, {headers: requestOptions});
  }

}

