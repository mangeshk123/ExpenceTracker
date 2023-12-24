import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-edit-expense',
  templateUrl: './edit-expense.component.html',
  styleUrls: ['./edit-expense.component.css']
})
export class EditExpenseComponent {
  @Input() expense: any;
  @Output() expenseEdited = new EventEmitter<any>();
  editedExpense: any;

  ngOnInit() {
    this.editedExpense = { ...this.expense };
  }

  saveEdit() {
    if (this.editedExpense.description.trim() !== '' && this.editedExpense.amount > 0) {
      this.expenseEdited.emit(this.editedExpense);
    }
  }
}
