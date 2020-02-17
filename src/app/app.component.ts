import { Component } from '@angular/core';
import { Store, Action } from '@ngrx/store';
7
import { AppState } from '../redux/app.state';
// import { counterReducer } from '../redux/cunter/counter.reducer';
import { INCREMENT, DECREMENT } from '../redux/cunter/counter.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'counter-app';
  counter: number;

  constructor(
    private store: Store<AppState>
  ) {
    this.store.select('counter')
    .subscribe((counterState)=>{
      this.counter = counterState;
      console.log(`counterState ${counterState}`);
    });
  }
  increment(){
    const action: Action = {
      type: INCREMENT
    }
    this.store.dispatch(action);
  }
  decrement() {
    const action: Action = {
      type: DECREMENT
    }
    this.store.dispatch(action);
  }
}
