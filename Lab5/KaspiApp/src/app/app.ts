import { Component } from '@angular/core';
import { productList } from './components/product-list/product-list.component';
import { productService } from './services/products.services';
import { categoryModel } from './models/category.model';
import { productModel } from './models/product.model';
import { UpperCasePipe } from '@angular/common';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [productList,UpperCasePipe],
    templateUrl: './app.html',
    styleUrl: './app.css'
})
export class App {
  categories: categoryModel[] = [];
  selectedCategoryId: number | null = null;
  filteredProducts: productModel[] = [];

  constructor(private productService: productService) {
    this.categories = this.productService.getCategories();
    this.filteredProducts = this.productService.getProducts();
    this.selectedCategoryId = 0;
  }

  selectCategory(categoryId: number): void {
    this.selectedCategoryId = categoryId;
    if (categoryId === 0) {
      this.filteredProducts = this.productService.getProducts();
    } else {
      this.filteredProducts = this.productService.getProductsByCategory(categoryId);
    }
  }

  isSelected(categoryId: number): boolean {
    return this.selectedCategoryId === categoryId;
  }
}