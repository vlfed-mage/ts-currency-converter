import React from 'react';

import './app.scss';

import Header from '../header';
import CurrencyConverter from '../currency-converter';

const App: React.FC = () => {
    return (
        <>
            <Header />
            <main>
                <CurrencyConverter />
            </main>
        </>
    );
};

export default App;
