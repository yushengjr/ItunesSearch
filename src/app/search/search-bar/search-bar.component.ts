import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SearchService } from '../search.service';
import { Artist } from '../model/artist';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  name = new FormControl('');
  artistList: Artist[];
  constructor(private searchService: SearchService) { }

  ngOnInit() {
    this.artistList = [];
  }
  search() {
    this.searchService.getArtistList(this.name.value).subscribe(
      artists => {
        this.artistList = artists;
      },
      err => console.error(err)
    );
  }

}
