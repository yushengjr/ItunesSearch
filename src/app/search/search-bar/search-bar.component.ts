import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SearchService } from '../search.service';
import {
  debounceTime,
  distinctUntilChanged,
  switchMap,
  map,
  filter,
  catchError,
} from 'rxjs/operators';
import { Observable, fromEvent, merge, Subscription, throwError } from 'rxjs';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit, OnDestroy {
  name = new FormControl('');
  @ViewChild('searchBtn') button: ElementRef;
  @ViewChild('searchInput') input: ElementRef;
  searchClick$: Observable<any>;
  subscriber: Subscription;
  constructor(private searchService: SearchService) {}

  ngOnInit() {
    this.searchClick$ = merge(fromEvent(this.button.nativeElement, 'click'), fromEvent(this.input.nativeElement, 'keypress'));
    this.subscriber = this.searchClick$.pipe(
      filter( event => (event.code === 'Enter' || event.type === 'click') && this.name.value.length > 0),
      map(v => this.name.value),
      debounceTime(400),
      distinctUntilChanged(),
      switchMap((term: string) => this.searchService.getArtistList(term)),
      catchError(err => throwError(err))
    ).subscribe(
      (res) => this.searchService.artistsUpdate.emit(res)
    );

    /** //if any input changed, do search.
    this.name.valueChanges.pipe(
      debounceTime(400),
      distinctUntilChanged(),
      switchMap((term: string) => this.searchService.getArtistList(term))
    ).subscribe();
    */
  }
  search = () => {
    // this.searchService.getArtistList(this.name.value);
  }

  ngOnDestroy() {
    this.subscriber.unsubscribe();
  }
}
