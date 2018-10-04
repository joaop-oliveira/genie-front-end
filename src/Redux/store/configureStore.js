/* eslint-disable no-underscore-dangle */
/* global window */
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import erpReducer from '../reducers/erpReducer';
import permissionReducer from '../reducers/permissionReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () =>
  createStore(
    combineReducers({
      erp: erpReducer,
      permission: permissionReducer,
    }),
    composeEnhancers(applyMiddleware(thunk))
  );
