import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers: [ProductService]
})
export class ProductsComponent implements OnInit {

  currentDay: number = 0;
  products: any[] = [
    {
      name: 'Special Full Coverage',
      sellIn: 15,
      price: 20
    }, {

      name: 'Full Coverage',
      sellIn: 2,
      price: 0
    }, {
      name: 'Mega Coverage',
      sellIn: 0,
      price: 80
    }, {

      name: 'Super Sale',
      sellIn: 3,
      price: 6
    }
  ]

  constructor(private productService: ProductService) { }

  ngOnInit() {
    
  }

  updatePrice() {
    if (this.currentDay <= 30) {
      this.currentDay++;
      this.products = this.productService.updatePrice(this.products);
    }
  }
}
