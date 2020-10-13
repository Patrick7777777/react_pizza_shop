import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from "react-router-dom";
import './scss/app.scss';
import App from './App';
import Provider from "react-redux/lib/components/Provider";
import store from "./redux/store";

store.dispatch({
    type: 'SET_SORT_BY',
    payload: 'price'
});

ReactDOM.render(

      <Router>
          <Provider store={store}>
              <App />
          </Provider>
      </Router>,

  document.getElementById('root')
);

