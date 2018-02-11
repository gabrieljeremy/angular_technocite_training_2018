import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../product.model';
@Component({
  selector: 'app-products-department',
  // templateUrl: './products-department.component.html',
  template: `<div class="product-department">
  <span *ngFor="let name of product.department; let i = index">
  <a href="#">{{name}}</a>
  <span>{{i < (product.department.length-1) ? '>' : ''}}</span></span>
  </div>`,
  styleUrls: ['./products-department.component.scss']
})
export class ProductsDepartmentComponent implements OnInit {
  @Input() product: Product;
  constructor() { }

  ngOnInit() {
  }

}
