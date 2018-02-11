import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products-row',
  templateUrl: './products-row.component.html',
  styleUrls: ['./products-row.component.scss']
})
export class ProductsRowComponent implements OnInit {
  @Input() product: Product;
  @HostBinding('attr.class') cssClass = 'item';
  constructor(private productService: ProductService) { // private : parle pas de lui dans l'html
  }
  selectItem(product: Product) {
    this.productService.deleteProduct(product);
  }
  ngOnInit() {}
}
