import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ordinal',
  pure: false
})
export class OrdinalPipe implements PipeTransform {

  transform(value:number)
  {
    if (value === null || value === undefined) 
    {
      return '';
    }
    const suffixes = ['th', 'st', 'nd', 'rd'];
    const suffix = value >= 4 && value <= 39 ? 'th' : suffixes[value % 10];
    return value+suffix;
  }

}
