import React, { useContext } from 'react'
import { TransactionsContext } from '../Context/TransactionsContext';

export const Transaction = ({ transaction }) => {
    const { deleteTransaction } = useContext(TransactionsContext);

    return (
        <li className={(transaction.amount < 0) ? "minus" : "plus"}>
            {transaction.description}
            <span>${transaction.amount}</span>
            <button
                className="delete-btn"
                onClick={() => {
                    deleteTransaction(transaction.id);
                }}>
                X
            </button>
        </li>
    );
}
