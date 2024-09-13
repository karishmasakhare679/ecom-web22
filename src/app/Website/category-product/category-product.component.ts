import {  Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../services/products/products.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-category-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './category-product.component.html',
  styleUrl: './category-product.component.css'
})
export class CategoryProductComponent  
implements OnInit {
  productList: any[] = [];
  categoryId: number = 0;

  constructor(private route: ActivatedRoute,private prodSrv: ProductsService ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.categoryId = +params['id'];
      this.loadCategoryProducts();
    });
  }

  loadCategoryProducts() {
    this.prodSrv.getProductsByCateId(this.categoryId).subscribe((res: any) => {
      this.productList = res.data;
    });
  }


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

  // activatedCategoryId: number  = 0;
  // products :any [] =[];

  // constructor (private activateRoute:ActivatedRoute, private prodSrv:ProductsService,   private cdr: ChangeDetectorRef){
  //   this.activateRoute.params.subscribe((res:any) =>{debugger;
  //     this.activatedCategoryId = res.id;
  //     this.loadProducts();
  //   });
  // }

  // loadProducts(){
  //   this.prodSrv.getProductsByCateId(this.activatedCategoryId).subscribe((res:any) =>{debugger;
  //     this.products = res.data;
  //     this.cdr.detectChanges();
  //   });
  // }



