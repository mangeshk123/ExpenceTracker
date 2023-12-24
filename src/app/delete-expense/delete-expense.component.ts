import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-delete-expense',
  templateUrl: './delete-expense.component.html',
  styleUrls: ['./delete-expense.component.css']
})
export class DeleteExpenseComponent {
  @Output() expenseDeleted = new EventEmitter<void>();

  deleteExpense() {
    this.expenseDeleted.emit();
  }
}
