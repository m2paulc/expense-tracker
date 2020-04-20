import React from 'react';

export const Balance = (props) => {
  return (
    <div className="inner-container">
      <div>
        <h4>Balance</h4>
        <p className="totals balance">{props.handleRemainingBalance()}</p>
      </div>
      <div>
        <h4>Total Expenses</h4>
        <p className="totals expenses">{props.handleTotalExpenses()}</p>
      </div>
    </div>
  );
};
