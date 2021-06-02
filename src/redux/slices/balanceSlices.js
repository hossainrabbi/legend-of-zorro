import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        bankBalance: 100000,
    },
    reducers: {
        addBalance: (state) => {
            const newState = state;
            newState.bankBalance += 1000;
        },
        negatesBalance: (state) => {
            const newState = state;
            newState.bankBalance = newState.bankBalance > 0 && newState.bankBalance - 1000;
        },
        cashToCharity: (state) => {
            const newState = state;
            newState.bankBalance = 0;
        },
    },
});

export const { addBalance, negatesBalance, cashToCharity } = counterSlice.actions;

export default counterSlice.reducer;
