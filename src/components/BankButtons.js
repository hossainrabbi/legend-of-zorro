import React from 'react';
import { Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import { addBalance, cashToCharity, negatesBalance } from '../redux/actions/balanceAction';
import CustomBtn from './CustomBtn';

const BankButtons = ({ added, negates, charity }) => (
    <Row className="mt-5">
        <CustomBtn name="+1000" bgColor="#0392f7" dispatch={added} />
        <CustomBtn name="-1000" bgColor="#d66300" dispatch={negates} />
        <CustomBtn name="Charity" bgColor="#dc3545" dispatch={charity} />
    </Row>
);

const mapStateToProps = (state) => ({
    bankBalance: state.bankBalance,
});

const mapDispatchToProps = (dispatch) => ({
    added: () => dispatch(addBalance()),
    negates: () => dispatch(negatesBalance()),
    charity: () => dispatch(cashToCharity()),
});

export default connect(mapStateToProps, mapDispatchToProps)(BankButtons);
