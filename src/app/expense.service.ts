import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {
  expenses: any[] = [];

  getExpenses(): any[] {
    return this.expenses;
  }

  addExpense(newExpense: any) {
    this.expenses.push(newExpense);
  }

  editExpense(index: number, updatedExpense: any) {
    this.expenses[index] = updatedExpense;
  }

  deleteExpense(index: number) {
    this.expenses.splice(index, 1);
  }
}
