import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductsService } from '../services/products/products.service';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule], // Include FormsModule here
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginObj ={
    UserName: " ",
    UserPassword: " ",
  };

  constructor(private prodSrv: ProductsService, private router: Router) {}

  onLogin(){debugger;
    this.prodSrv.customerLogin(this.loginObj).subscribe((res: any) =>{
      if (res.result) {debugger;
        console.log('User logged in successfully');
        this.router.navigateByUrl('web-products');
      } else {
        console.log(res.message);
      }
    });
  }
}
