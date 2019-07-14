import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  name = new FormControl('');
  constructor(private searchService: SearchService) { }

  ngOnInit() {
  }
  search = () => {
    this.searchService.getArtistList(this.name.value);
  }
}
