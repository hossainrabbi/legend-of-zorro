import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import btnItem from './button.data';

const BankButtons = () => (
    <Row className="mt-4">
        {btnItem.map((item) => (
            <Col md={4} key={item.id}>
                <Button
                    className="custom-btn w-100 py-3"
                    style={{ backgroundColor: `${item.bgColor}` }}
                >
                    {item.name}
                </Button>
            </Col>
        ))}
    </Row>
);

export default BankButtons;
