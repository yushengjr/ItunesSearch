import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';
import { IReturnData } from '../returnData';
import { IAlbum } from '../album';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  albumData : IReturnData;
  resultData: IAlbum[];
   //name: string;
  constructor(private searchService: SearchService) {

   }
  showAlbumResult(value){
    this.resultData = [];
    // this.name = value;
    this.searchService.getAlbums(value).subscribe(data=>{this.albumData=data; this.resultData = this.albumData.results; console.log(this.albumData.results);});
  }

 

  ngOnInit() {  
    //this.searchService.getAlbums(name).subscribe(data=>this.albumData=data);
    //  console.log(this.albumData);
  }

  

}
