// src/app/app-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponentComponent } from './home-component/home-component.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { ProductsCategoryComponent } from './products-category/products-category.component';
import {ProductsCategoryQPComponent} from "./products-category-qp/products-category-qp.component";
import {DetailsCategoryComponent} from "./details-category/details-category.component";

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponentComponent },
  { path: 'products/:id', component: ProductsCategoryComponent },
  { path: 'products-qp', component: ProductsCategoryQPComponent},
  { path: 'details/:id', component: DetailsCategoryComponent },
  { path: '**', component: NotFoundPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
