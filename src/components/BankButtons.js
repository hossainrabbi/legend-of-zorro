import React from 'react';
import { Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addBalance, cashToCharity, negatesBalance } from '../redux/slices/balanceSlices';
import CustomBtn from './CustomBtn';

const BankButtons = () => {
    const dispatch = useDispatch();
    return (
        <Row className="mt-5">
            <CustomBtn name="+1000" bgColor="#0392f7" onClick={() => dispatch(addBalance())} />
            <CustomBtn name="-1000" bgColor="#d66300" onClick={() => dispatch(negatesBalance())} />
            <CustomBtn name="Charity" bgColor="#dc3545" onClick={() => dispatch(cashToCharity())} />
        </Row>
    );
};

export default BankButtons;
