import { Action } from '@ngrx/store';

export const INCREMENT = '[Counter] incrementar';
export const DECREMENT = '[Counter] decrementar';
export const PLUS = '[Counter] plus';

export interface PlusAction extends Action {
  payload: number;
}