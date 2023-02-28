import React from 'react';

import ExchangeRate from '../exchange-rate';

const Header: React.FC = () => {
    return (
        <header>
            <h1>Exchange Rates</h1>
            <ExchangeRate from='usd' />
            <ExchangeRate from='eur' />
        </header>
    );
};

export default Header;
