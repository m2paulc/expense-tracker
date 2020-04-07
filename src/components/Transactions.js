import React from 'react';
export default class Transactions extends React.Component {
  handleShowTransactions() {
    return this.props.transactionDetails.map((transaction, idx) => (
      <div key={idx} className="grid">
        <p>{idx + 1}</p>
        <p>{transaction.date}</p>
        <p>{transaction.name}</p>
        <p>{transaction.type}</p>
        <p>{transaction.amount}</p>
      </div>
    ));
  }
  render() {
    return (
      <>{this.handleShowTransactions()}</>
    );
  }
};
