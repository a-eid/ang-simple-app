import {Component} from '@angular/core' 
import {IProduct} from './iProduct'

@Component({
  selector: 'product-detail', 
  moduleId: module.id , 
  templateUrl: 'product-detail.component.html'
})
export class ProductDetailComponent {
  pageTitle: string = "Product detail"
  product:IProduct 
}