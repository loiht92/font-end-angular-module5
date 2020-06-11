import { Component, OnInit } from '@angular/core';
import {Category} from '../../interface/category';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CategoryService} from '../../category.service';

@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.css']
})
export class CategoryAddComponent implements OnInit {
  categoryList: Category[] = [];
  failMessage: string;
  successMessage: string;
  categoryForm: FormGroup;

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.categoryForm = new FormGroup(
      {
        category_name: new FormControl('',
          [Validators.required,
            Validators.minLength(10)]),
        producer: new FormControl('',
          [Validators.required,
            Validators.minLength(10)])
      }
    );
  }

  onSubmit() {
    if (this.categoryForm.valid) {
      const {value} = this.categoryForm;
      this.categoryService.createCategory(value)
        .subscribe(result => {
          this.categoryList.push(result);
          this.successMessage = 'Add category successfully !';
          this.categoryForm.reset({
            category_name: '',
            producer: ''
          });
        }, error => {
          this.failMessage = 'Add category fail !';
        });
    }
  }
}
