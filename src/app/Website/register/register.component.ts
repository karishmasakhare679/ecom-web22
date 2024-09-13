import { Component } from '@angular/core';
import { ProductsService } from '../services/products/products.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  constructor(private prodSrv:ProductsService){}
  customerRegisterObj ={
  "CustId": 0,
  "Name": "",
  "MobileNo": "",
  "Password": ""
  };

  customerRegister(){debugger;
    this.prodSrv.customerRegister(this.customerRegisterObj).subscribe((res:any)=>{
      if (res.result){debugger;
        alert ('customer successfully registerd');
      }else{
        alert(res.message);


      }
    });
  }

}
