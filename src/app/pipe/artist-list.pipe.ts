import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'artistList'
})
export class ArtistListPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
