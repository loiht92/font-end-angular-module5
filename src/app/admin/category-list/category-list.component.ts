import { Component, OnInit } from '@angular/core';
import {Category} from '../../interface/category';
import {FormGroup} from '@angular/forms';
import {CategoryService} from '../../category.service';


@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  categoryList: Category[] = [];
  failMessage: string;

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.categoryService.getAllCategory()
      .subscribe(result => {
        this.categoryList = result.content;
      }, error => {
        this.failMessage = 'LIST CATEGORY FAIL !';
      });
  }

  deleteCategory(i) {
    const category = this.categoryList[i];
    if (confirm('Are you sure you want to delete it?')) {
      this.categoryService.deleteCategory(category.id)
        .subscribe((result) => {
          this.categoryList = this.categoryList.filter(t => t.id !== category.id);
        });
    }
  }
}
