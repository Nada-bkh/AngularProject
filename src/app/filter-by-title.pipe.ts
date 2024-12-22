import { Pipe, PipeTransform } from '@angular/core';
import { Categorie } from './models/categorie';

@Pipe({
  name: 'filterByTitle'
})
export class FilterByTitlePipe implements PipeTransform {
  transform(categories: Categorie[], searchTerm: string): Categorie[] {
    if (!categories || !searchTerm) {
      return categories;
    }
    return categories.filter(category =>
      category.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
}
