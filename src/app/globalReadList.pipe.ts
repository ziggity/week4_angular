import { Pipe, PipeTransform } from '@angular/core';
import { Book } from './book.model'

@Pipe({
  name: 'globalReadList',
  pure: false
})
export class globalReadListPipe implements PipeTransform {

  transform(input: Book[]) {
    var output: Book[] = [];

    for (var i = 0; i < input.length; i++) {
      if(input[i].globalReadList == "globalReadList"){
        output.push(input[i]);
      }

    }
    return output;
  }

}
