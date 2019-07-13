import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class DataService {
  constructor(private http: HttpClient) {}

  getInfo() {
    return this.http.get("https://jsonplaceholder.typicode.com/posts");
  }

  saveInfo(newItem) {
    return this.http.post(
      "https://jsonplaceholder.typicode.com/posts",
      newItem
    );
  }
}
