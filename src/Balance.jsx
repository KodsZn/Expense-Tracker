import React from 'react';  
function Balance({ balance,income,expense }) {
    return (
        <div className="balance">
            <h1> Expense Tracker</h1>
            <div className="container">
                <div className="header">
                    <img
                        src="https://i.ibb.co/jfScDTC/budget.png"
                        alt="Expense Tracker"
                    />
                    <div className="balance-container">
                        <h2>Your Balance</h2>
                        <h2 id="balance" className="balance">{balance !== undefined && balance !== null ? `$${balance.toFixed(2)}` : '$0.00'}</h2>
                    </div>
                </div>
                <div className="inc-exp-container">
                    <div>
                        <h4>Income</h4>
                        <p id="money-plus" className="money plus">{income !== undefined && income !== null ? `$${income.toFixed(2)}` : '$0.00'}</p>
                    </div>
                    <div>
                        <h4>Expenses</h4>
                        <p id="money-minus" className="money minus">{expense !== undefined && expense !== null ? `$${expense.toFixed(2)}` : '$0.00'}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Balance;
