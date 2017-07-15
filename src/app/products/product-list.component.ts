import { Component, OnInit } from '@angular/core'
import { IProduct } from './iProduct'
import {ProductService} from './product.service'

@Component({
  selector: 'pm-products',
  moduleId: module.id,
  templateUrl: 'product-list.component.html',
  styleUrls: ['product-list.component.css']
})
export class ProductListComponent implements OnInit {

  
  getTitle = (): string => "Product List"
  pageTitle: string = "Product list"
  imageWidth: number = 50
  imageMargin: number = 2
  showImages: boolean = false
  buttonText: string = "show Images"
  listFilter: string = ""
  errorMessage: string 
  products: IProduct[]
  
  // private productService : ProductService;
  // constructor(productService: ProductService){
  //   this.productService = productService
  // }
  
  // this is equivelent to the commented code above 
  constructor(private productService : ProductService){
  }
  
  toggleImages = (): void => {
    this.showImages = !this.showImages
    this.buttonText = this.showImages ? "Hide Images" : "Show Images"
  }
  
  ngOnInit(): void {
    this.productService.getProducts()
      .subscribe( products => this.products = products , 
        error => this.errorMessage = error = <any>error )
  }
  
  onRatingClicked = (e : string): void => {
    console.log(e) 
  }
}

