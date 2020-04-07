import React from 'react';

export const Balance = () => {
  return (
    <div className="inner-container">
      <div>
        <h4>Your Balance</h4>
        <p className="totals">$0.00</p>
      </div>
      <div>
        <h4>Total Expenses</h4>
        <p className="totals">$0.00</p>
      </div>
    </div>
  );
};
