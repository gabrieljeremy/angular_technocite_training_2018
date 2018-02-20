import { Injectable } from '@angular/core';
import { Product } from './product.model';

@Injectable()
export class ProductService {
  private products: any[]; // éléments privé et pour les utiliser => getProduct()
  constructor() {
    this.products = [
      new Product(
        'MYSHOES',
        'Black running shoes',
        '/assets/images/products/black-shoes.jpg',
        ['men', 'Shoes', 'Running'],
        109.99
      ),
      new Product(
        'NEATOJACKET',
        'Black running shoes',
        '/assets/images/products/blue-jacket.jpg',
        ['WOMEN', 'Apparel', 'Jackets & vests'],
        98.99
      ),
      new Product(
        'NICEHAT',
        'A nice black hat running shoes',
        '/assets/images/products/black-hat.jpg',
        ['Men', 'Accessories', 'Hats'],
        38.99
      )
    ];
  }
  getProducts(): Product[] {
    return this.products;
  }
  deleteProduct(product: Product) {
    this.products = this.products.filter(item => item !== product);
  }
}
