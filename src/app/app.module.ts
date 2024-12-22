import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { FooterComponentComponent } from './footer-component/footer-component.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ListCategoriesComponentComponent } from './list-categories-component/list-categories-component.component';
import { ProductsComponentComponent } from './product-module/products-component/products-component.component';
import { FilterByTitlePipe } from './filter-by-title.pipe';
import {FormsModule} from "@angular/forms";
import { HighlightDirective } from './highlight.directive';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { ProductsCategoryComponent } from './products-category/products-category.component';
import { ProductsCategoryQPComponent } from './products-category-qp/products-category-qp.component';
import { DetailsCategoryComponent } from './details-category/details-category.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    FooterComponentComponent,
    HomeComponentComponent,
    ListCategoriesComponentComponent,
    ProductsComponentComponent,
    FilterByTitlePipe,
    HighlightDirective,
    NotFoundPageComponent,
    ProductsCategoryComponent,
    ProductsCategoryQPComponent,
    DetailsCategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
