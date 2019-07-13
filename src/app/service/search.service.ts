import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map, catchError } from "rxjs/operators";
import { SearchData } from "../shared/model/SearchData.model";

@Injectable({ providedIn: "root" })
export class SearchService {
  baseUrl: string = "https://itunes.apple.com/search?term=";
  searchUrl: string = "&media=music&entity=album&attribute=artistTerm&limit=50";
  constructor(private http: HttpClient) {}

  searchByName(searchValue) {
    return this.http.get(this.baseUrl + searchValue + this.searchUrl);
  }
}
