import { Component,OnInit  } from '@angular/core';
import { IKPA, KPA } from '../kpcontrol/kpanchor.component';
import { IKPImg, KPImg } from '../kpcontrol/kpimg.component';
@Component({
    selector:'main-header',
    styleUrls:['./header.component.css'],
    templateUrl:'./header.component.html',    
})
export class MainHeader implements OnInit
{
   public Company:IKPImg;
   public Cart:IKPImg;
   public Login:IKPA;

    ngOnInit()
    {                
        this.Company ={
            Src:'/shared/resources/images/angular.png',
            Tooltip :'Angular',
            Class :'companylogo'
        };
        
        this.Cart = {  
            Src: '/shared/resources/images/shopping-cart.jpg' ,
            Tooltip: 'Cart',
            Class:'carthead'
        };

        this.Login = {  
            Class: 'loginlink' ,
            Href: '/login',
            LinkName:'Login'
        };        
    }    
}