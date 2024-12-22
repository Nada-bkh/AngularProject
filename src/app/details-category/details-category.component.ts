// src/app/details-category/details-category.component.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details-category',
  templateUrl: './details-category.component.html',
  styleUrls: ['./details-category.component.css']
})
export class DetailsCategoryComponent implements OnInit {
  categoryId: number=0;
  categoryDescription: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      this.categoryId = +idParam;
      console.log('Category ID:', this.categoryId);
    } else {
      this.categoryDescription = `Description de la catégorie avec ID ${this.categoryId}`;
    }
  }
}
