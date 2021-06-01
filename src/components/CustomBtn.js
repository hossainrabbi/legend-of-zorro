import React from 'react';
import { Button, Col } from 'react-bootstrap';

const CustomBtn = ({ name, bgColor, dispatch }) => (
    <Col md={4}>
        <Button
            className="custom-btn w-100 py-3"
            style={{ backgroundColor: bgColor }}
            onClick={() => dispatch()}
        >
            {name}
        </Button>
    </Col>
);

export default CustomBtn;
