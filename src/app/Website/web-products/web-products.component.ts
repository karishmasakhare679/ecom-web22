import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductsService } from '../services/products/products.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-web-products',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './web-products.component.html',
  styleUrl: './web-products.component.css',
})
export class ProductsComponent implements OnInit {
  productList: any[] = [];
  categoryList: any[] = [];
  constructor(private prodSrv: ProductsService ) {}

  ngOnInit(): void {
    this.getAllProducts();
    this.getAllCategory();
  }
  getAllProducts() {
    this.prodSrv.getProduct().subscribe((res: any) => {
      debugger;
      this.productList = res.data;
    });
  }

  getAllCategory() {
    debugger;
    this.prodSrv.getCategory().subscribe((res: any) => {
      debugger;
      this.categoryList = res.data;
    });
  }

  //add to cart//
  addToCartFunt(productId: number) {debugger;
    const addtocartObj = {
      "CartId": 0,
      "CustId": '379',
      "ProductId": productId,
      "Quantity": 1,
      "AddedDate": new Date()
    };
    this.prodSrv.addToCart(addtocartObj).subscribe((res:any)=>{debugger;
      if(res.result){
        alert(res.message);
        this.prodSrv.cartUpdated$?.next(true);
      }else{
        alert(res.result);
      }
    });
  }




}
