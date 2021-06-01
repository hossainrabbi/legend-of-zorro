import { ADD_BALANCE, NEGATES_BALANCE } from '../actions/actionType';

const initializingState = {
    bankBalance: 100000,
};

console.log(initializingState);

const balanceReducer = (state = initializingState, action) => {
    switch (action.type) {
        case ADD_BALANCE:
            return {
                ...state,
                bankBalance: state.bankBalance + 1000,
            };
        case NEGATES_BALANCE:
            return {
                ...state,
                bankBalance: state.bankBalance - 1000,
            };
        default:
            return state;
    }
};

export default balanceReducer;
