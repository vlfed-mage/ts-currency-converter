import React, { useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import './currency-converter.scss';
import services from '../../services';

import Select from '../select';

type Params = {
    from: string;
    to: string;
};

type RatesData = {
    result: number;
};

type Services = {
    getRates: (from: string, to: string, amount?: number) => Promise<RatesData>;
};

const CurrencyConverter: React.FC = () => {
    const initialParams: Params = {
        from: 'EUR',
        to: 'UAH',
    };

    const [params, setParams] = useSearchParams(initialParams);
    const { from, to } = Object.fromEntries([...params]) as Params;

    const fromAmount = useRef<number | null>(null);
    const toAmount = useRef<number | null>(null);

    const [toState, setToState] = useState<string>(initialParams.to);
    const [fromState, setFromState] = useState<string>(initialParams.from);
    const [amountState, setAmountState] = useState<number>(1);
    const [exchangeRage, setExchangeRage] = useState<number | undefined>();
    const [flag, setFlag] = useState<boolean>(true);

    useEffect(() => {
        let active = true;
        const { getRates }: Services = services();

        getRates(from, to).then(({ result }: RatesData) => {
            if (active) {
                setExchangeRage(result);
                setFromState(from);
                setToState(to);
            }
        });

        return () => {
            active = false;
        };
    }, [from, to]);

    const handleAmountUpdate = ({ target: { name, value } }: React.ChangeEvent<HTMLInputElement>) => {
        setAmountState(parseFloat(value));
        setFlag(name === 'amount');
    };

    const handleCurrencyUpdate = ({ target: { name, value } }: React.ChangeEvent<HTMLSelectElement>) => {
        setParams({ ...Object.fromEntries([...params]), [name]: value });
    };

    const handleDirectionUpdate: React.MouseEventHandler<HTMLButtonElement> = () => {
        setParams({ from: to, to: from });
    };

    if (flag) {
        fromAmount.current = amountState;
        toAmount.current = amountState * (exchangeRage ?? 1);
    } else {
        toAmount.current = amountState;
        fromAmount.current = amountState / (exchangeRage ?? 1);
    }

    return (
        <div className='currency-converter'>
            <h2>Currency Converter</h2>
            <div className='select-wrapper'>
                from
                <Select
                    name='from'
                    value={fromState}
                    onChangeHandler={handleCurrencyUpdate}
                />
                <input
                    name='amount'
                    type='number'
                    value={fromAmount.current}
                    onChange={handleAmountUpdate}
                />
            </div>
            <div className='select-wrapper'>
                to
                <Select
                    name='to'
                    value={toState}
                    onChangeHandler={handleCurrencyUpdate}
                />
                <input
                    name='result'
                    type='number'
                    value={toAmount.current}
                    onChange={handleAmountUpdate}
                />
            </div>
            <button onClick={handleDirectionUpdate}>change</button>
        </div>
    );
};

export default CurrencyConverter;
