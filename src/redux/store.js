import { configureStore } from '@reduxjs/toolkit';
import balanceReducer from './slices/balanceSlices';

export default configureStore({
    reducer: { balance: balanceReducer },
});
