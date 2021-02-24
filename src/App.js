import './App.css';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { AccountSummary } from './components/AccountSummary';
import { TransactionHistory } from './components/TransactionHistory';
import { AddTransaction } from './components/AddTransaction';
import { TransactionContextProvider } from './Context/TransactionsContext';

function App() {

  return (
    <div className="App">
      <Header />
      <TransactionContextProvider>
        <Balance />
        <AccountSummary />
        <TransactionHistory />
        <AddTransaction />
      </TransactionContextProvider>
    </div>
  );
}

export default App;
