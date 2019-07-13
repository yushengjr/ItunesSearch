import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "pipe"
})
export class PipePipe implements PipeTransform {
  transform(value: any[], args?: any): any {
    return value.slice(0, 10);
  }
}
