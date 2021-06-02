import { createSlice } from '@reduxjs/toolkit';

export const balanceSlice = createSlice({
    name: 'balance',
    initialState: {
        bankBalance: 100000,
        alertMessage: false,
    },
    reducers: {
        addBalance: (state) => {
            const newState = state;
            newState.bankBalance += 1000;
            newState.alertMessage = false;
        },
        negatesBalance: (state) => {
            const newState = state;
            newState.bankBalance = newState.bankBalance > 0 && newState.bankBalance - 1000;
            if (newState.bankBalance <= 0) {
                newState.alertMessage = true;
            }
        },
        cashToCharity: (state) => {
            const newState = state;
            newState.bankBalance = 0;
            newState.alertMessage = true;
        },
    },
});

export const { addBalance, negatesBalance, cashToCharity } = balanceSlice.actions;

export default balanceSlice.reducer;
