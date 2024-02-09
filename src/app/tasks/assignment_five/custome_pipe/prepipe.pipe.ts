import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'prepipe'
})
export class PrepipePipe implements PipeTransform {

  transform(name:string, gender:string)
  {
    if(gender === 'male'){
      return "Mr. "+name;
    }
    else if(gender === 'female'){
      return "Miss. "+name;
    }
    else{
      return name;
    }
  }

}
