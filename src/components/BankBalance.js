import React from 'react';
import { connect } from 'react-redux';

const BankBalance = ({ bankBalance }) => (
    <div className="bank-balance text-center w-100">${bankBalance || 0}</div>
);
const mapStateToProps = (state) => ({
    bankBalance: state.bankBalance,
});

export default connect(mapStateToProps)(BankBalance);
