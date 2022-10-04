import { Pipe, PipeTransform } from '@angular/core';
import { IProducts } from './products';

@Pipe({
  name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {

  transform(value: IProducts[],args:string): IProducts[]
   {let filter:string= args ? args.toLocaleLowerCase(): '';
    return filter ? value.filter((product: IProducts) =>
     product.productName.toLocaleLowerCase().indexOf(filter) != -1 ): value
    
  }

}
