import {Injectable} from '@angular/core'
import {Http , Response} from '@angular/http'
import {IProduct} from './iProduct'
import {Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/map'; // for Observable.map .. 
import 'rxjs/add/operator/do'; 
import 'rxjs/add/operator/catch'; 
import 'rxjs/add/operator/toPromise';

// not required unless the service itself has a dependancy which is injectable 
// but its a good practice to include it in every service you make for clarity and consistancy 
@Injectable()
export class ProductService{
  productUrl = "/api/products/products.json"
  constructor(private http: Http){
  }
  
  getProducts(): Observable<IProduct[]> {
    return this.http.get(this.productUrl)
      .map((response: Response) => <IProduct[]> response.json())
      .do( data => console.log( JSON.stringify(data))) 
      .catch(this.handleError)
      // this is casting operator to IProduct[] array if you  are wondering 
  }

  private handleError = ( error : Response) => {
    console.log(error)
    return Observable.throw( error.json().error || 'server error' )
  }
}
