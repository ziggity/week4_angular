import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'roleFilter'
})
export class RoleFilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
