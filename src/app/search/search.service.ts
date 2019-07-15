import { Injectable, EventEmitter, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs';
import { Artist } from './model/artist';
import { environment } from 'src/environments/environment';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SearchService implements OnDestroy {
  public artistsUpdate = new EventEmitter<Artist[]> ();
  public searching = new EventEmitter<string> ();
  constructor(private http: HttpClient) {  }

  /** jsonp solution
   * 1.Treat as js file, parse back to Json
   * 2.Only work on GET
  getArtistList = (artist: string) => {
    this.searching.emit('start');
    return this.http.jsonp(`${environment.baseUrl}search?term=${artist}&entity=album&callback=JSONP_CALLBACK`, 'searchArtist')
    .pipe(
      map((res: any) => res.results.map(
        (ars: any) => new Artist(ars)
      )),
      catchError( err => throwError(err))
    );
  }
   */

  getArtistList = (artist: string) => {
    this.searching.emit('start');
    return this.http.get(`${environment.baseUrl}search?term=${artist}&entity=album`)
    .pipe(
      map((res: any) => res.results.map(
        (ars: any) => new Artist(ars)
      )),
      catchError( err => throwError(err))
    );
  }
  ngOnDestroy() {
    // this.observableResult.
  }

}
