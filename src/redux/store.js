import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import balanceReducer from './reducer/balanceReducer';

const store = createStore(balanceReducer, applyMiddleware(thunk));

export default store;
