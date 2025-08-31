import { useState } from "react";

function TransactionForm({ onAddTransaction }) {
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState(0);

const handleSubmit = (e) => {
        e.preventDefault();
        if (!description || !amount) return;
        onAddTransaction({ description, amount: Number(amount) });
        setDescription('');
        setAmount(0);
    };
  return (
    <div className="transaction-form-container">
    <h3>Add new transaction</h3>
    <form id="form" className="transaction-form" onSubmit={handleSubmit}>
      <div class="form-control">
          <label for="text">Description</label>
          <input type="text"  id="text" placeholder="Enter description..." value={description} onChange={(e) => setDescription(e.target.value)} />
      </div>
      <div class="form-control">
          <label for="amount"
            >Amount <br />
            <small>(-100 = expense, 100 = income)</small></label>
            <input type="number" id="amount" placeholder="Enter amount..."  value={amount} onChange={(e) => setAmount(e.target.value)} />
      </div>
      <button type="submit">Add Transaction</button>
    </form>
    <div class="notification-container" id="notification">
      <p>Please add a description and amount</p>
    </div>
    </div>
    
  
  );
}

export default TransactionForm;
