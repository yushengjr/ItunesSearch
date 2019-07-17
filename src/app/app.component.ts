import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title : string;
  contentOfSubmitButton : string;

  constructor(/*services import here */){}

  ngOnInit(){
    //runs when components is created
    this.title = 'API Test For iTunes';
    this.contentOfSubmitButton = 'Submit';
  }

  searchForArtist(){
    //alert("button clicked!");
  }
}
