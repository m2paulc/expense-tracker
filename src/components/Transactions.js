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
      <>
        <div className="transaction-header">
          <p>id</p>
          <p>date</p>
          <p>name</p>
          <p>type</p>
          <p>amount</p>
        </div>
        {this.handleShowTransactions()}
      </>
    );
  }
};
