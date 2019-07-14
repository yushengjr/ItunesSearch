import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search/search.service';
import { Artist } from '../search/model/artist';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})

export class AlbumComponent implements OnInit {
  artistList: Artist[];
  searchStatus = 'waiting';
  constructor(private searchService: SearchService) {
    searchService.searching.subscribe(
      (res: string) => {
        this.searchStatus = res;
      }
    );
  }

  ngOnInit() {
    this.searchService.artistsUpdate.subscribe(
      (artists: Artist[]) => {
        this.artistList = artists;
        this.searchStatus = 'end';
    });
  }
}
