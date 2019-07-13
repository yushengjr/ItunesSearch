import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Artist } from './model/artist';
import { environment } from 'src/environments/environment';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) {  }

  /** jsonp solution
   * 1.Treat as js file, parse back to Json
   * 2.Only work on GET
   */
  // getArtist = (artist: string): Observable<string[]> => {
  //   return terms.debounceTime(400)
  //   .distinctUntilChanged()
  //   .switchMap(term => this.searchEntries(term));
  //   return this.http.jsonp(`${environment.baseUrl}search?term=${artist}&limit=5&callback=JSONP_CALLBACK`, 'searchArtist')
  //   .pipe(
  //     map( res => res['results']),
  //     catchError( err => throwError(err))
  //   );
  // }

  getArtistList = (artist: string): Observable<Artist[]> => {
    return this.http.jsonp(`${environment.baseUrl}search?term=${artist}&callback=JSONP_CALLBACK`, 'searchArtist')
    .pipe(
      map((res: any) => res.results.map(
        (ars: any) => new Artist(ars)
      )),
      catchError( err => throwError(err))
    );
  }
}
