import { Injectable } from '@angular/core';



@Injectable()
export class ProductService {


  updatePrice(products) {
    for (var i = 0; i < products.length; i++) {
      // The price of a product is never negative and is never more than 50.
      if (products[i].price > 0 && products[i].price <= 50) {

        switch (products[i].name) {
          case 'Full Coverage':
            // actually increases in price the older it gets
            products[i].sellIn--;
            products[i].price++;
            break;
          case 'Mega Coverage':
            //  being a legendary product, never has to be sold or decreases in price
            break;
          case 'Special Full Coverage':
            if (products[i].sellIn <= 0) {
              products[i].price = 0;
              return;
            }

            if (products[i].sellIn <= 10 && products[i].sellIn >= 6) {
              products[i].price++;
            }

            if (products[i].sellIn <= 5) {
              products[i].price++;
            }
            break;
          case 'Super Sale':
            if (products[i].price <= 0) {
              return;
            }

            products[i].sellIn--;
            products[i].price--;
            break;
        }
      }
    }

    return products;
  }
}
