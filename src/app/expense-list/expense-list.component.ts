import { Component } from '@angular/core';
import { ExpenseService } from '../expense.service';

@Component({
  selector: 'app-expense-list',
  templateUrl: './expense-list.component.html',
  styleUrls: ['./expense-list.component.css']
})
export class ExpenseListComponent {
  expenses: any[] = []; // Populate this array with actual data
  selectedExpenseIndex: number | null = null;

  constructor(private expenseService: ExpenseService) {
    this.expenses = this.expenseService.getExpenses();
  }

  editExpense(index: number) {
    this.selectedExpenseIndex = index;
    this.expenseService.editExpense(index,[])
  }

  deleteExpense(index: number) {
    this.expenseService.deleteExpense(index);
    this.selectedExpenseIndex = null;
  }
}
