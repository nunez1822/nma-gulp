import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: "searchByLastName"
})

export class SearchByLastNamePipe implements PipeTransform {
    transform(value, lastName) {
      if (value==null) {
         return null;
      }

      return value.filter((c)=> c.lastName.toLowerCase().startsWith(lastName.toLowerCase()));
    }
}