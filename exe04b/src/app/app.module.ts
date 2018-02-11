import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductsRowComponent } from './products-row/products-row.component';
import { ProductsDepartmentComponent } from './products-department/products-department.component';
import { ProductsImageComponent } from './products-image/products-image.component';
import { ProductService } from './product.service';


@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    ProductsRowComponent,
    ProductsDepartmentComponent,
    ProductsImageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ProductService], // pour les services
  bootstrap: [AppComponent]
})
export class AppModule { }
