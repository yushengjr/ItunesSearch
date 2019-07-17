import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumContainerModule } from '../album-container/album-container.module'

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ReturnDataModule { 
  resultCount : number;
  results : AlbumContainerModule[];
}
