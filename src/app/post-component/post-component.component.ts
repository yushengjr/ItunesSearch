import { Component, OnInit } from "@angular/core";
import { PostService } from "../service/post.service";

export const defualtShowNum = 10;
@Component({
  selector: "app-post-component",
  templateUrl: "./post-component.component.html",
  styleUrls: ["./post-component.component.scss"]
})
export class PostComponentComponent implements OnInit {
  title: string;
  body: string;
  items;
  dataPost = {};

  constructor(private postSerivce: PostService) {}

  ngOnInit() {
    this.postSerivce.onGet().subscribe(data => {
      this.sub(data, defualtShowNum);
      console.log(this.items);
    });
  }

  onSubmit() {
    this.dataPost = {
      title: this.title,
      body: this.body,
      userId: 1
    };
    this.postSerivce.onPost(this.dataPost).subscribe(data => {
      this.items = [
        {
          userId: data["userId"],
          id: data["id"],
          title: data["title"],
          body: data["body"]
        }
      ];
    });
  }

  sub(data: any, count: number) {
    let index = 0;
    let newItems = [];
    for (let element in data) {
      let informatin = {
        userId: data[element]["userId"],
        id: data[element]["id"],
        title: data[element]["title"],
        body: data[element]["body"]
      };
      newItems.push(informatin);
      index++;
      if (index >= count) {
        break;
      }
    }
    this.items = newItems;
  }
}
