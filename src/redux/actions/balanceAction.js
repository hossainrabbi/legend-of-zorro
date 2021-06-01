import { ADD_BALANCE, CASH_TO_CHARIT, NEGATES_BALANCE } from './actionType';

export const addBalance = () => ({
    type: ADD_BALANCE,
});

export const negatesBalance = () => ({
    type: NEGATES_BALANCE,
});

export const cashToCharity = () => ({ type: CASH_TO_CHARIT });
