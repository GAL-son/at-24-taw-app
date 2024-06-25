import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortPosts',
  standalone: true
})
export class SortPostsPipe implements PipeTransform {

  transform(value: any[], enable: boolean, prop: string, asc: boolean): any {
    if(!value) return [];
    if(!enable || !prop) return value;

    return value.sort((a: any, b: any) => {
      let valA;
      let valB;
      if(typeof(a[prop]) == 'string') {
        valA = a[prop].toLowerCase();
        valB = b[prop].toLowerCase();        
      } else {
        valA = a[prop];
        valB = b[prop];
      }
     

      if(valA == valB) return 0;
        

      return (valA > valB)? 1 : -1; 
    })

  }

}
