import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'img'
})
export class ImgPipe implements PipeTransform {

  transform(value: string, defaults : string): string {
    
    if(value==""){
      return defaults;
    }else{
    return value;
    }
    
    // return null;
  }

}
