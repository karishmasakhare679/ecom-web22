import { Routes } from '@angular/router';
import { NavbarComponent } from './Website/navbar/navbar.component';
import { CategoryProductComponent } from './Website/category-product/category-product.component';
import { ProductsComponent } from './Website/web-products/web-products.component';
import { LoginComponent } from './Website/login/login.component';
import { RegisterComponent } from './Website/register/register.component';


export const routes: Routes = [
    {
        path: '',
        component: NavbarComponent,
        children: [
            
            {
                path: '',
                redirectTo: 'web-products',
                pathMatch: 'full'
            },
            // {path:'', component:ProductsComponent},
            {
                path: 'web-products',
                component: ProductsComponent
            },

            {
                path: 'category-product/:id',
                component: CategoryProductComponent
            }
        ]
    },
    {
        path:'login', component:LoginComponent
    },
    {
        path:'register',component:RegisterComponent
    }
];