import { Component } from '@angular/core';
import { ExpenseService } from '../expense.service';

@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrls: ['./add-expense.component.css']
})
export class AddExpenseComponent {
  newExpense: any = { description: '', amount: 0 };

  constructor(private expenseService: ExpenseService) {}

  addExpense() {
    if (this.newExpense.description.trim() !== '' && this.newExpense.amount > 0) {
      this.expenseService.addExpense({ ...this.newExpense });
      this.newExpense = { description: '', amount: 0 };
    }
  }
}
