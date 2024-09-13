import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products/products.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule,RouterOutlet,RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {

  productList :any [] = [];
  categoryList :any [] = [];
  cartList :any [] = [];
  cartCount: number = 0;

  constructor(private prodSrv: ProductsService, private router:Router , private route: ActivatedRoute,) { 
    this.prodSrv.cartUpdated$?.subscribe((res:any)=>{
      this.getCartByCustomerId();
    })
  }

  ngOnInit(): void {
  this.getAllProducts();
  this.getAllCategory();
  this.getCartByCustomerId();
  }

  getAllProducts(){
    this.prodSrv.getProduct().subscribe((res:any) => {debugger
      this.productList= res.data;
    });
  }

  getAllCategory(){debugger
    this.prodSrv.getCategory().subscribe((res:any) =>{debugger;
      this.categoryList = res.data;
    });
  }

  navigateToProduct(id: number) {
    this.router.navigate(['/category-product', id]);
  }

  getCartByCustomerId(){debugger;
    this.prodSrv.getCartProductsByCustomerID(379).subscribe((res:any)=>{
      this.cartList = res.data;
      this.cartCount = this.cartList.length; // Update the cart count
    });
  }

  removeCartBtn(cartid:number){
    this.prodSrv.removeProductByCustId(cartid).subscribe((res:any)=>{
      this.getCartByCustomerId();
    });
  }
  
}
