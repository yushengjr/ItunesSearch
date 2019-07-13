import { Component, OnInit } from "@angular/core";
import { SearchService } from "src/app/service/search.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  searchList;

  constructor(private service: SearchService) {}

  ngOnInit() {}
  search(searchName) {
    let searchValue = searchName.value;
    if (searchValue.indexOf(" ") != -1) {
      var artistValue = searchValue.replace(" ", "+");
    } else {
      artistValue = searchValue;
    }
    console.log(artistValue);
    this.service.searchByName(artistValue).subscribe(resData => {
      console.log(resData);
      this.searchList = resData;
    });
  }
}
