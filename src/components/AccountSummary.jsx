import React, { useContext, useState } from 'react'
import { TransactionsContext } from '../Context/TransactionsContext';

export const AccountSummary = () => {
    const { transactionList } = useContext(TransactionsContext);
    const amounts = transactionList.map(transaction => transaction.amount);
    const incomeAmount = amounts.filter(amount => amount > 0)
        .reduce((total, amount) => (total += amount), 0)
        .toFixed(2);
    const expenseAmount = amounts.filter(amount => amount < 0)
        .reduce((total, amount) => (total += amount), 0) * (-1)
        .toFixed(2);

    return (
        <div className="inc-exp-container">
            <div>
                <h4>Income</h4>
                <p className="money plus">${incomeAmount}</p>
            </div>
            <div>
                <h4>Expense</h4>
                <p className="money minus">${expenseAmount}</p>
            </div>
        </div>
    )
}
