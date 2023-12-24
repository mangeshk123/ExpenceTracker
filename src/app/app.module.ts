import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import FormsModule

import { CommonModule } from '@angular/common';

import { EditExpenseComponent } from './edit-expense/edit-expense.component'; // Import EditExpenseComponent
import { AddExpenseComponent } from './add-expense/add-expense.component';
import {ExpenseListComponent} from './expense-list/expense-list.component';
@NgModule({
  declarations: [
    EditExpenseComponent,
    AddExpenseComponent,
    ExpenseListComponent,
  ],
  exports: [
    AddExpenseComponent,
    ExpenseListComponent,
      ],
  imports: [
    FormsModule,
    CommonModule 
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
