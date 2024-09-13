import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constant } from '../../constatnt/constant';

import { catchError, Observable, Subject, throwError } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private  http: HttpClient) { }
  public cartUpdated$: Subject<boolean> = new Subject();

  getCategory(){
    return this.http.get(Constant.API_END_POINT+Constant.METHODS.GET_ALL_CATEGORY);
  }
  getProductsByCateId(id:number){
    return this.http.get(Constant.API_END_POINT+Constant.METHODS.GET_ALL_PRODUCT_BY_CATEGORY+id);
  }

  getProduct(){
    return this.http.get(Constant.API_END_POINT+Constant.METHODS.GET_ALL_PRODUCT);
  }



  saveProduct(obj :any){
    return this.http.post(Constant.API_END_POINT + Constant.METHODS.CREATE_PRODUCT,obj);
  }

  updateProduct(obj :any){
    return this.http.post(Constant.API_END_POINT + Constant.METHODS.UPDATE_PRODUCT,obj);
  }

  addToCart(obj:any){
    return this.http.post(Constant.API_END_POINT + Constant.METHODS.ADD_TO_CART, obj);
  }

  getCartProductsByCustomerID(custId:number){
    return this.http.get(Constant.API_END_POINT+Constant.METHODS.GET_CART_PRODUCTS_BY_CUSTOMER_ID + custId);
  }


  removeProductByCustId(cartId: number){
    return this.http.get(Constant.API_END_POINT + Constant.METHODS.REMOVE_CART + cartId);
  }

customerLogin(obj :any){
  return this.http.post(Constant.API_END_POINT + Constant.METHODS.LOGIN, obj);
}

customerRegister(obj :any){
  return this.http.post(Constant.API_END_POINT + Constant.METHODS.CUSTOMER_REGISTER, obj);
}

  private handleError(error: HttpErrorResponse) {
    console.error('An error occurred:', error);
    return throwError('Something went wrong. Please try again later.');
  }
}
