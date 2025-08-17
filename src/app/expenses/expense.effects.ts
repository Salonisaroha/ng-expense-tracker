import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { ExpenseService } from './expense.service';
import * as ExpenseActions from "./expense.actions";
import { of } from 'rxjs';
import { map, catchError, exhaustMap } from 'rxjs/operators';

@Injectable()
export class ExpenseEffects {
  private actions$ = inject(Actions);
  private expenseService = inject(ExpenseService);

  // Load expenses
  loadExpense$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ExpenseActions.loadExpenses),
      exhaustMap(() =>
        this.expenseService.getExpenses().pipe(
          map(expenses => ExpenseActions.loadExpensesSuccess({ expenses })),
          catchError(error => of(ExpenseActions.loadExpensesFailure({ error })))
        )
      )
    )
  );

  addExpense$ = createEffect(()=>
this.actions$.pipe(
    ofType(ExpenseActions.addExpense),
    exhaustMap(action =>
        this.expenseService.addExpense(action.expenseData).pipe(
            map(expense => ExpenseActions.addExpenseSuccess({expense})),
            catchError(error =>of(ExpenseActions.addExpenseFailure({error})))
        )
    )
));

updateExpense$ = createEffect(()=>
this.actions$.pipe(
    ofType(ExpenseActions.updateExpense),
    exhaustMap(action =>
        this.expenseService.updateExpense(action.expense).pipe(
            map(expense => ExpenseActions.updateExpenseSuccess({expense})),
            catchError(error=>of(ExpenseActions.updateExpenseFailure({error})))
        )
    )
));

deleteExpense$ = createEffect(()=>
this.actions$.pipe(
    ofType(ExpenseActions.deleteExpense),
    exhaustMap(action =>
        this.expenseService.deleteExpense(action.expenseId).pipe(
            map(()=>ExpenseActions.deleteExpenseSuccess({expenseId:action.expenseId})),
            catchError(error => of(ExpenseActions.deleteExpenseFailure({error})))
        )
    )
))


}
