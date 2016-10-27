import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';

import App from './components/app';
import reducers from './reducers';


ReactDOM.render(
  <Provider store={createStore(reducers)}>
    
  </Provider>
  , document.querySelector('.container'));
