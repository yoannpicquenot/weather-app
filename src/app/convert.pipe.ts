import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convert'
})
export class ConvertPipe implements PipeTransform {

  transform(temperature: number): string {
    return `${Math.round(temperature - 273.15)}°C`;
  }

}
