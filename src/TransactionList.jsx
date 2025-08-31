// TransactionList.jsx
import React from "react";

function TransactionList({ transactions }) {
    return (
        <div className="transaction-list">
         <h3>History</h3>
        <ul  id="list" class="list">
            {transactions.map((t, i) => (
            <li key={i}>
                {t.description} - ${t.amount}
            </li>
            ))}
        </ul>
        </div>
    );
    }

export default TransactionList;