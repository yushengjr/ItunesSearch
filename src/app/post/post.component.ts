import { DataService } from "./../service/data.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-post",
  templateUrl: "./post.component.html"
})
export class PostComponent implements OnInit {
  itemList;
  formTitle;
  formBody;

  constructor(private service: DataService) {}

  ngOnInit() {
    this.service.getInfo().subscribe(resData => {
      this.itemList = resData;
    });
  }
  onSubmit() {
    let newItem = {
      title: this.formTitle,
      body: this.formBody
    };
    this.service.saveInfo(newItem).subscribe(resData => {
      this.itemList.push(resData);
      console.log(this.itemList);
    });
  }
}
