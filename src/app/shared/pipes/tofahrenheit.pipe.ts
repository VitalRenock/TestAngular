import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tofahrenheit'
})
export class TofahrenheitPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): number {
    return (value * 9/5) + 32;
  }

}
