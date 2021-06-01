import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temperature'
})
export class TemperaturePipe implements PipeTransform {

  transform(value: number, unite : string): string {
    if(unite == "c") return (value - 32) * 9/5 + 'C°';
    if(unite == "f") return (value * 9/5) + 32 + 'F°';
    return "Unité non prise en charge"
  }

}
