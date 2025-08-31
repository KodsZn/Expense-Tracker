import { useState } from 'react';
import './App.css';
import Balance from './Balance';
import TransactionForm from './TransactionForm';
import TransactionList from './TransactionList';

function App() {
  const [transactions, setTransactions] = useState([]);
  const handleAddTransaction = (transaction) => {
  setTransactions([...transactions, transaction])  };
  const calculateBalance = () => {
    return transactions.reduce((acc, transaction) => acc + transaction.amount, 0);
  };
  const income = transactions
  .filter(item => item.amount > 0)          // keep only incomes
  .reduce((acc, item) => acc + item.amount, 0); // sum them
  const expense = (transactions
    .filter(item => item.amount < 0)          // keep only expenses
    .reduce((acc, item) => acc + item.amount, 0) * -1); // sum them and make it positive
  
    return (
    <div className="App">
    <Balance balance={calculateBalance()} income={income} expense={expense}/>
    <TransactionList transactions={transactions}/>
    <TransactionForm onAddTransaction={handleAddTransaction}  />

      
    </div>
  );
}

export default App;
