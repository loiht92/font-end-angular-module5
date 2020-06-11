import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductUpdateComponent } from './product-update/product-update.component';
import {RouterModule, Routes} from '@angular/router';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryAddComponent } from './category-add/category-add.component';
import { CategoryUpdateComponent } from './category-update/category-update.component';
import {ReactiveFormsModule} from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: ProductListComponent
  },
  {
    path: 'product-add',
    component: ProductAddComponent
  },
  {
    path: 'product-update',
    component: ProductUpdateComponent
  },
  {
    path: 'category-list',
    component: CategoryListComponent
  },
  {
    path: 'category-add',
    component: CategoryAddComponent
  },
  {
    path: 'category/:id',
    component: CategoryUpdateComponent
  }
];

@NgModule({
  // tslint:disable-next-line:max-line-length
  declarations: [ProductListComponent, ProductAddComponent, ProductUpdateComponent, CategoryListComponent, CategoryAddComponent, CategoryUpdateComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ]
})
export class AdminModule { }
