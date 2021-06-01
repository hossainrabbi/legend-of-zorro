import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import { addBalance } from '../redux/actions/balanceAction';

const BankButtons = ({ addedBalance }) => (
    <Row className="mt-4">
        <Col md={4}>
            <Button className="custom-btn w-100 py-3" onClick={() => addedBalance()}>
                +1000
            </Button>
        </Col>
    </Row>
);

const mapStateToProps = (state) => ({
    numOfCake: state.numOfCake,
});

const mapDispatchToProps = (dispatch) => ({
    addedBalance: () => dispatch(addBalance()),
});

export default connect(mapStateToProps, mapDispatchToProps)(BankButtons);
