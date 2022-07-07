import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customTileCase'
})
export class CustomTileCasePipe implements PipeTransform {

  transform(input: string, ...args: string[]) {
    let result = "";
    let wordsArray: string[] = input.split(" ");
    if (wordsArray.length > 1) {
      wordsArray.forEach((word) => {
        result = result + word.charAt(0).toUpperCase() + word.substring(1, word.length) + " ";
      })
    }
    else {
      result = result + input.charAt(0).toUpperCase() + input.substring(1, input.length) + " ";
    }
    return result;
  }

}
