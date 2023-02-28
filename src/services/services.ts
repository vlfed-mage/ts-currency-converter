import axios, { AxiosResponse } from 'axios';

export interface Rate {
    result: number;
}

export interface Symbols {
    symbols: {
        [key: string]: string;
    };
}

type GetRates = (from: string, to: string, amount?: number) => Promise<Rate>;
type GetSymbols = () => Promise<Symbols>;

const services = () => {
    const { get } = axios;

    const getRates: GetRates = async (from, to, amount = 1) => {
        const response: AxiosResponse<Rate> = await get('/api/convert', {
            params: { from, to, amount },
        });
        return response.data;
    };

    const getSymbols: GetSymbols = async () => {
        const response: AxiosResponse<Symbols> = await get('/api/symbols');
        return response.data;
    };

    return {
        getRates,
        getSymbols,
    };
};

export default services;
