import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../product.model';
@Component({
  selector: 'app-products-image',
  templateUrl: './products-image.component.html',
  styleUrls: ['./products-image.component.scss']
})
export class ProductsImageComponent implements OnInit {
  @Input() product: Product;

  constructor() { }

  ngOnInit() {
  }
}
