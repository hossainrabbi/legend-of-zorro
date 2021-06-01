import React from 'react';
import { Container } from 'react-bootstrap';
import BankBalance from './components/BankBalance';
import BankButtons from './components/BankButtons';

const App = () => (
    <div className="App d-flex justify-content-center align-items-center mx-auto w-50">
        <Container>
            <BankBalance />
            <BankButtons />
        </Container>
    </div>
);

export default App;
