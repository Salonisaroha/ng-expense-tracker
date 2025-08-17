import { createAction, props } from '@ngrx/store';
import { Expense } from './expense.model';

export type ExpenseData = Omit<Expense, 'id'>;

//loading

export const loadExpenses = createAction('[Expenses Page] load Expense');
export const loadExpensesSuccess = createAction(
  '[Expense API] load Expense Success',
  props<{ expenses: Expense[] }>()
);
export const loadExpensesFailure = createAction(
  '[Expenses API] load Expense Failure',
  props<{ error: any }>()
);
//add
export const addExpense = createAction(
  '[Expenses Page] Add Expense',
  props<{ expenseData: ExpenseData }>()
);
export const addExpenseSuccess = createAction(
  '[Expense API] Add Expense Success',
  props<{ expense: Expense }>()
);
export const addExpenseFailure = createAction(
  '[Expenses API] Add Expense Failure',
  props<{ error: any }>()
);
//update
export const updateExpense = createAction(
  '[Expense Page] Update Expense',
  props<{ expense: Expense }>()
);
export const updateExpenseSuccess = createAction(
  '[Expense API] Update Expense Success',
  props<{ expense: Expense }>()
);
export const updateExpenseFailure = createAction(
  '[Expenses API] Update Expense Failure',
  props<{ error: any }>()
);
//delete

export const deleteExpense = createAction(
  '[Expenses Page] Delete Expense',
  props<{ expenseId: string }>()
);
export const deleteExpenseSuccess = createAction(
  '[Expense API] Delete Expense Success',
  props<{ expenseId: string }>()
);
export const deleteExpenseFailure = createAction(
  '[Expenses API] Delete Expense Failure',
  props<{ error: any }>()
);
