import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: "searchByFirstName"
})

export class SearchByFirstNamePipe implements PipeTransform {
    transform(value, firstName) {
      if (value==null) {
         return null;
      }

      return value.filter((c)=> c.firstName.toLowerCase().startsWith(firstName.toLowerCase()));
    }
}