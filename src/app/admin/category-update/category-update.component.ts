import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../../category.service';
import {Category} from '../../interface/category';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-category-update',
  templateUrl: './category-update.component.html',
  styleUrls: ['./category-update.component.css']
})
export class CategoryUpdateComponent implements OnInit {
  category: Category[];
  failMessage: string;
  successMessage: string;
  categoryForm: FormGroup;
  constructor(private categoryService: CategoryService,
              private route: ActivatedRoute,
              private routes: Router) { }

  ngOnInit(): void {
    this.categoryForm = new FormGroup({
        category_name: new FormControl('',
          [Validators.required,
            Validators.minLength(10)]),
        producer: new FormControl('',
          [Validators.required,
            Validators.minLength(10)])
      }
    );
    const id = +this.route.snapshot.paramMap.get('id');
    this.categoryService.getCategoryById(id)
      .subscribe(result => {
        this.category = result;
        this.categoryForm.patchValue(this.category);
        this.successMessage = 'Edit category successfully !';
      }, error => {
        this.failMessage = 'Edit category fail';
      });
  }

  onSubmit() {
    if (this.categoryForm.valid) {
      const {value} = this.categoryForm;
      const data = {
        ...this.category,
        ...value
      };
      this.categoryService.updateCategory(data)
        .subscribe(result => {
          this.routes.navigate(['/category-list']);
        }, error => {
          console.log(error);
        });
    }
  }

}
