import React, { useContext } from 'react'
import {Transaction} from './Transaction';
import {TransactionsContext} from '../Context/TransactionsContext';

export const TransactionHistory = () => {
    const {transactionList} = useContext(TransactionsContext);
    
    return (
        <div>
            <h3>Transaction History</h3>
            <ul className="list">
                {
                    transactionList.map((item)=>(
                        <Transaction key={item.id} transaction={item} />
                    ))
                }
            </ul>
        </div>
    )
}
