import { RouterModule, Routes} from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NavComponent } from './nav/nav.component';
import { ProductsComponent } from './products/products.component';

import { routes as childRoutes, ProductsModule } from './products/products.module';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'}, // suivre le chemin jusqu'à home entièrement
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'products', component: ProductsComponent, children: childRoutes }
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NavComponent,
    ProductsComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    ProductsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
