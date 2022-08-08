import { Pipe, PipeTransform } from '@angular/core';
import { Rain } from './weather';

@Pipe({
  name: 'getByKey'
})
export class GetByKeyPipe implements PipeTransform {

  transform(value: any, key: string) {
      return value?.hasOwnProperty(key) ? value[key]!.toString() : "";
  }


}
