import { Component, OnInit } from '@angular/core';
import { FetchAlbumService } from 'src/app/Services/fetch-album.service';

import { AlbumContainerModule } from '../../Models/album-container/album-container.module';
import { ReturnDataModule } from 'src/app/Models/return-data/return-data.module';
import { DataToShowModule } from '../../Models/data-to-show/data-to-show.module';

@Component({
  selector: 'app-my-album',
  templateUrl: './my-album.component.html',
  styleUrls: ['./my-album.component.scss']
})
export class MyAlbumComponent implements OnInit {
  artName : string;
  intro : string;
  contentOfSearchButton : string;
  acm : AlbumContainerModule[];
  rdm : ReturnDataModule;
  dts : DataToShowModule[];

  constructor(private fa : FetchAlbumService) { 
    this.intro = 'Name of Artist : ';
    this.contentOfSearchButton = 'search';
    //hard code here for test
    //this.artName = 'Adele';
    this.artName = '';
    this.dts = [];
  }

  ngOnInit() {
  }

  imageClicked(a : number){
    let content = '';
    let dt = (this.dts)[a];
    content += "DETAILS:\n\n\n";
    content += "Collection Name: " + dt.name + "\n\n";
    content += "Artist Name: " + dt.artName + "\n\n";
    content += "Media Type: " + dt.type.toUpperCase() + "\n\n";
    content += "Released Country: " + dt.country + "\n\n";
    content += "Collection Price: $" + dt.collectionPrice + "\n\n";
    content += "Release Date: " + dt.releaseDate.substring(0, 10) + "\n\n";
    content += "Link of Demo: " + dt.previewUrl + "\n";

    alert(content);
  }

  buttonClicked(){
    //every time click the button, we need to set the dts value to empty;
    this.dts = [];
    //alert("clicked");
    if(this.artName==''){
      alert("Artist's name cannot be empty");
    }
    //fetch data and show it
    //call my fetch service
    else{
      this.fa.getAlbums(this.artName).
              subscribe((data : ReturnDataModule) => {
                this.rdm = data;
                console.log(this.rdm.resultCount);
                this.acm = this.rdm.results;
                for(let i=0;i<this.rdm.resultCount;i++){
                  //console.log((this.acm)[i].artworkUrl100);
                  let temp = new DataToShowModule();
                  temp.ID = i;
                  temp.type = (this.acm)[i].kind;
                  temp.artName = (this.acm)[i].artistName;
                  temp.previewUrl = (this.acm)[i].previewUrl;
                  temp.primaryGenreName = (this.acm)[i].primaryGenreName;
                  temp.releaseDate = (this.acm)[i].releaseDate;
                  temp.country = (this.acm)[i].country;
                  temp.collectionPrice = (this.acm)[i].collectionPrice;
                  temp.name = (this.acm)[i].trackName;
                  temp.cover = (this.acm)[i].artworkUrl100;
                  temp.demo = (this.acm)[i].previewUrl;
                  this.dts.push(temp);
                  //console.log((this.dts)[i].name);
                }
              });
    }
  }
}
