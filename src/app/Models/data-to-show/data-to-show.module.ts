import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class DataToShowModule {
    ID : number;
    type : string;
    artName : string;
    previewUrl : string;
    primaryGenreName : string;
    releaseDate : string;
    country : string;
    collectionPrice : number;
    name : string;
    cover : string;
    demo : string;
 }
