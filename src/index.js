import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from "react-router-dom";
import './scss/app.scss';
import App from './App';
import { createStore } from "redux";

function counter (state = 0, action) {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1
        case 'DECREMENT':
            return state - 1
        default:
            return state

    }
}

const store = createStore(counter);

store.subscribe(()=>console.log('хранилище изменилось', store.getState()));

console.log(store.getState());

store.dispatch({type: 'INCREMENT'});
store.dispatch({type: 'INCREMENT'});


ReactDOM.render(

      <Router>
          <App />
      </Router>,

  document.getElementById('root')
);

