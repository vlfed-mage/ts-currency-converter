import React, { useState, useEffect } from 'react';

import services from '../../services';
import { Rate } from '../../services/services';

type RatesData = {
    result: number;
};

interface Props {
    from: string;
}

type Services = {
    getRates: (from: string, to: string, amount?: number) => Promise<RatesData>;
};

const ExchangeRate: React.FC<Props> = ({ from }) => {
    const [rate, setRate] = useState<number | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        let isMounted = true;
        const { getRates }: Services = services();

        getRates(from, 'uah').then(({ result }: Rate) => {
            if (isMounted) {
                setRate(result);
                setLoading(false);
            }
        });

        return () => {
            isMounted = false;
        };
    }, [from]);

    const currentRate = loading ? '--' : rate;

    return <span>{`${from.toUpperCase()}: ${currentRate}`}</span>;
};

export default ExchangeRate;
