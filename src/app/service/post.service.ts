import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  baseURL: string = "https://jsonplaceholder.typicode.com/";
  searchURL: string = "posts";

  constructor(private http: HttpClient) {

  }
  onGet() {
    return this.http.get(this.baseURL + this.searchURL);
  }
  onPost(data) {
    return this.http.post(this.baseURL + this.searchURL,data);
  }


}
