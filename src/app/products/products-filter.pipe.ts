import { Pipe, PipeTransform } from '@angular/core'
import { IProduct } from './iProduct'

@Pipe({
  name: 'productFilter'
})

export class ProductFilterPipe implements PipeTransform {
  transform(products: IProduct[], filterBy: string): IProduct[] {
    filterBy = filterBy && filterBy.toLocaleLowerCase()
    if (!filterBy) return products
    return products.filter((product: IProduct) =>
      product.productName.toLocaleLowerCase().indexOf(filterBy) >= 0
    )
  }
}

