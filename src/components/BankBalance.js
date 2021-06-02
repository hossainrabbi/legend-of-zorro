import React from 'react';
import { useSelector } from 'react-redux';

const BankBalance = () => {
    const balanceState = useSelector((state) => ({
        balance: state.balance.bankBalance,
        alertMessage: state.balance.alertMessage,
    }));

    return (
        <>
            {balanceState.alertMessage && (
                <h4 className="text-center text-danger mb-4">Your balance is 0</h4>
            )}
            <div className="bank-balance text-center w-100">${balanceState.balance || 0}</div>
        </>
    );
};

export default BankBalance;
