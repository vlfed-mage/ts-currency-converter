import React from 'react';

import './app.scss';

import Header from '../header';
import CurrencyConverter from '../currency-converter';

const App: React.FC = () => {
    return (
        <main>
            <Header />
            <CurrencyConverter />
        </main>
    );
};

export default App;
