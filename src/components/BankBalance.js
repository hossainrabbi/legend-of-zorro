import React from 'react';
import { useSelector } from 'react-redux';

const BankBalance = () => {
    const bankBalance = useSelector((state) => state.balance.bankBalance);
    return <div className="bank-balance text-center w-100">${bankBalance || 0}</div>;
};

export default BankBalance;
