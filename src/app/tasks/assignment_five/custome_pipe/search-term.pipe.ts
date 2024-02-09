import { Pipe, PipeTransform } from '@angular/core';
import { Empl } from '../third/third.component';


@Pipe({
  name: 'searchTerm',
  pure:false
})
export class SearchTermPipe implements PipeTransform {

  transform(employee:Empl[],searchterm:string){
    if(!searchterm)
    {
      return employee;
    }
    return employee.filter(employee => {
      return employee.name.toLowerCase().includes(searchterm.toLowerCase()) ||
             employee.designation.toLowerCase().includes(searchterm.toLowerCase())
    })
  }

}
