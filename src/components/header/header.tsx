import React from 'react';

import './header.scss';

import ExchangeRate from '../exchange-rate';

const Header: React.FC = () => {
    return (
        <header className='header'>
            <div className='container'>
                <h2>Exchange Rates</h2>
                <ExchangeRate from='usd' />
                <ExchangeRate from='eur' />
            </div>
        </header>
    );
};

export default Header;
