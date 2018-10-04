import ReactDOM from 'react-dom';
import React from 'react';
import moment from 'moment';
import { Provider } from 'react-redux';
import configureStore from './Redux/store/configureStore';
import App from './App';

moment.locale('pt-br');
const store = configureStore();

const jsx = (
  <Provider store={store}>
    <App />
  </Provider>
);
ReactDOM.render(jsx, document.getElementById('root'));
