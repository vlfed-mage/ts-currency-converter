import React, { useEffect, useState } from 'react';

import './select.scss';

import services from '../../services';
import { Symbols } from '../../services/services';

interface Props {
    name: string;
    value: string;
    loading: boolean;
    onChangeHandler: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Select: React.FC<Props> = ({ name, value, loading, onChangeHandler }) => {
    const [symbols, setSymbols] = useState<Symbols | null>(null);

    useEffect(() => {
        const { getSymbols } = services();
        getSymbols().then(({ symbols }) => {
            setSymbols({ symbols });
        });
    }, []);

    return (
        <select name={name} value={value} onChange={onChangeHandler} disabled={loading}>
            {symbols?.symbols &&
                Object.entries(symbols.symbols).map(([code, name]) => (
                    <option key={code} value={code}>
                        {code} - {name}
                    </option>
                ))}
        </select>
    );
};

export default Select;
