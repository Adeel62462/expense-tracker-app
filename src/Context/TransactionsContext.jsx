import React, { useReducer } from 'react';
import TransactionReducer from './TransactionReducer';

const initialState = [];
export const TransactionsContext = React.createContext(initialState);

export const TransactionContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(TransactionReducer, initialState);

    function addTransaction(transaction) {
        dispatch({
            type: "ADD_TRANSACTION",
            payload: transaction
        });
    }

    function deleteTransaction(id) {
        dispatch({
            type: "DELETE_TRANSACTION",
            payload: id
        });
    }

    return (
        <TransactionsContext.Provider value={
            {
                transactionList: state,
                addTransaction,
                deleteTransaction
            }
        }>
            {children}
        </TransactionsContext.Provider>
    );
}
