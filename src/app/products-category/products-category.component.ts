import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/product';

@Component({
  selector: 'app-products-category',
  templateUrl: './products-category.component.html',
  styleUrls: ['./products-category.component.css']
})
export class ProductsCategoryComponent implements OnInit {
  categoryId: number = 0;
  listProducts: Product[] = [
    { id: 1, name: "Réfrigérateur LG Inox", image: "assets/images/refrigerateur-lg.jpg", categoryId: 1, description: "",
      price: 2800, brand: "LG", promotion: 0 },
    { id: 2, name: "Réfrigérateur Samsung Blanc", image: "assets/images/refrigerateur_samsung.jpg", categoryId: 1,
      description: "", price: 2400, brand: "Samsung", promotion: 0 },
    { id: 3, name: "Lave vaisselle Beko", image: "assets/images/lave_vaisselle.png", categoryId: 1, description: "",
      price: 1875, brand: "BEKO", promotion: 0 },
    { id: 4, name: "Oppo Smart Phone", image: "assets/images/oppo_smart.jpg", categoryId: 4, description: "",
      price: 1200, brand: "OPPO", promotion: 0 }
  ];

  filteredProducts: Product[] = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      this.categoryId = +idParam;
      console.log('Category ID:', this.categoryId);
      this.filteredProducts = this.listProducts.filter(product => product.categoryId === this.categoryId);
    } else {
      console.error('Category ID is null or undefined');
    }
  }
}
