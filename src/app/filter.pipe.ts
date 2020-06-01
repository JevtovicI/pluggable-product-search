import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, searchTerm: string, propertyName: string) : any {
    if (!searchTerm || searchTerm === '') {
      return value;
    }
    const filteredArray = [];
    for(const item of value) {
      if (searchTerm && item[propertyName].toLowerCase().includes(searchTerm.toLowerCase())) {
        filteredArray.push(item)
      }
    }
    return filteredArray;
  }

}
