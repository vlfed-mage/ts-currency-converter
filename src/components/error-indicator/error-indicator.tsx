import React from 'react';

import './error-indicator.scss';

const ErrorIndicator: React.FC = () => {
    return (
        <div className='error-indicator'>
            <b>Something went terribly wrong</b>
            <span>Reload the page or try again later</span>
        </div>
    );
};

export default ErrorIndicator;
