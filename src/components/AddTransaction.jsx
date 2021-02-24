import React, { useState, useContext } from 'react'
import {TransactionsContext} from '../Context/TransactionsContext';

export const AddTransaction = () => {
    const [description, setDescription] = useState("");
    const [amount, setAmount] = useState("");
    const {addTransaction} = useContext(TransactionsContext);
    
    function createTransaction(event) {
        event.preventDefault();
        const newTransaction = {
            id:new Date().toString(),
            description:description,
            amount:Number(amount)
        }
        addTransaction(newTransaction);
        setAmount("");
        setDescription("");
    }
    
    return (
        <div>
            <h3>Add New Transaction</h3>
            <form onSubmit={createTransaction}>
                <div className="form-control">
                    <label htmlFor="description">
                        Description
                    </label>
                    <input
                        type="text"
                        id="description"
                        placeholder="Details of Transaction"
                        value={description}
                        onChange={(e)=>{setDescription(e.target.value)}}
                        required
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="amount">
                        Transaction Amount
                    </label>
                    <input
                        type="number"
                        id="amount"
                        placeholder="Amount of Transaction"
                        value={amount}
                        onChange={(e)=>{setAmount(e.target.value)}}
                        required
                        />
                    <span style={{"paddingLeft":"10px"}}>(use <b>-</b> sign for expenses)</span>
                </div>
                <button type="submit" className="btn">Add Transaction</button>
            </form>
        </div>
    )
}
