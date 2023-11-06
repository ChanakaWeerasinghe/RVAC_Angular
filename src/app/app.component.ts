import { Component,VERSION } from '@angular/core';
// @ts-ignore
import {callJSFun} from '../custom.js';
// import {productData} from '../custom.js';
 declare function myfunction(param1: string, param2: string): any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
version: object = VERSION;


  srcsetConfig = [
    { size: '112/112', query: '600w' },
    { size: '500/500', query: '' }
  ];

  products: any[] = [
    {
      name: 'Sterling Silver Necklace',
      description: 'Gifts for Girls Sterling Silver Necklace',
      price: 144.99,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDngLv-AwYkNHYzNdTg0az3VKs1g1tPHzELw&usqp=CAU'
    },
    {
      name: 'Ring-Minimalistic',
      description: ' Handmade Flower Signet Ring-Minimalistic',
      price: 144.99,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg56EzsnBsMA03uOn6wufLLGgvH6FDWFwfowbYt3n5sEZE7Pe-OYF7a490lHt5DL62Q4I&usqp=CAU'
    },
    {
      name: 'Jewelry',
      description: 'Promise Lover Jewelryd',
      price: 11.99,
      image: 'https://jewellerymatters.com/cdn/shop/products/RSSCZ802-3_300x300.jpg?v=1638930920'
    },
    {
      name: 'Jewelry',
      description: 'A delicious food',
      price: 244.99,
      image: 'https://s.alicdn.com/@sc04/kf/H60cc5836af0546a78c51246ae1c02b4be.jpg_200x200.jpg'
    },
    {
      name: 'Jewelry',
      description: 'A delicious food',
      price: 74.99,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKYyOxHhGhl7GcvAm9RNOnDgMyTxHOnSNW7w&usqp=CAU'
    },
  ]


  title = 'angular-tour-of-heroes';
    ngOnInit(){


    callJSFun();
     }

     callJSFunction(){
     console.log("_________");
         callJSFun();
          }


           Status: boolean = true;

 clicked(data: string) {
 console.log(data);
               myfunction(data, 'test2');
//              productData("data data");
                this.Status = false;
             }

}


