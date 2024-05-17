import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  standalone: true
})
export class FilterTextPipe implements PipeTransform {

  transform(value: any[], filterText: any): any {
    if(!value) {return [];}
    if(!filterText) {return value;}
    filterText = filterText.toLowetCase();

    return value.filter(val => {
      if(!val.text) {
        return false;
      }

      return val.text.toLowetCase().includes(filterText);
    })
  }

}
