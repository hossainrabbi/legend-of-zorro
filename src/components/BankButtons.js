import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import { addBalance, cashToCharity, negatesBalance } from '../redux/actions/balanceAction';

const BankButtons = (props) => (
    <Row className="mt-4">
        <Col md={4}>
            <Button className="custom-btn w-100 py-3" onClick={() => props.addBalance()}>
                +1000
            </Button>
        </Col>
        <Col md={4}>
            <Button className="custom-btn w-100 py-3" onClick={() => props.negatesBalance()}>
                -1000
            </Button>
        </Col>
        <Col md={4}>
            <Button className="custom-btn w-100 py-3" onClick={() => props.cashToCharity()}>
                cash to charity
            </Button>
        </Col>
    </Row>
);

const mapStateToProps = (state) => ({
    bankBalance: state.bankBalance,
});

const mapDispatchToProps = (dispatch) => ({
    addBalance: () => dispatch(addBalance()),
    negatesBalance: () => dispatch(negatesBalance()),
    cashToCharity: () => dispatch(cashToCharity()),
});

export default connect(mapStateToProps, mapDispatchToProps)(BankButtons);
