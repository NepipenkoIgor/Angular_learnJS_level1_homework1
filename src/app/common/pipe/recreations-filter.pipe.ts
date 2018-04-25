import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'recreationsFilter'
})
export class RecreationsFilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    console.log(args);
    return value;
  }

}
