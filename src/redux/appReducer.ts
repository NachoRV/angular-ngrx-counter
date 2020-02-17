import { AppState } from './app.state';
import { counterReducer } from './cunter/counter.reducer';

export const AppReducer = {
  counter: counterReducer,
  //todos: TodosReducer
}