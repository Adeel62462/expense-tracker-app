import React, { useContext } from 'react'
import { TransactionsContext } from '../Context/TransactionsContext';

export const Balance = () => {
    const { transactionList } = useContext(TransactionsContext);
    const balance = transactionList.reduce((total, { amount }) => (total += amount), 0)
        .toFixed(2);

    return (
        <div className="container">
            <h4>CURRENT BALANCE</h4>
            <h1>${balance}</h1>
        </div>
    )
}
