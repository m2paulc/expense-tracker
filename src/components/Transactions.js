import React from 'react';
import { CSSTransition } from 'react-transition-group';
export default class Transactions extends React.Component {
  constructor(props) {
    super(props);
    this.state = { transactions: [] };
  }
  handleComponentState() {
    let { transactions } = this.state;
    let newState = this.props.transactionDetails.map(transaction => transaction.id);
    transactions = this.props.transactionDetails.map(transaction => transaction.id);
    console.log(newState);
    console.log(transactions);
    this.setState({ transactions: newState }, console.log(this.state.transactions));
  }
  handleClickDelete(id) {
    console.log(id);
    let filterTransactions = this.state.transactions;
    filterTransactions = filterTransactions.filter(trans => trans.id !== id);
    console.log(filterTransactions);
    this.setState({ transactions: filterTransactions });
  };
  handleTest() {
    console.log('You clicked Me!');
  };
  handleShowTransactions() {
    return this.props.transactionDetails.map((transaction, idx) => {
      const divRef = React.createRef();
      return (
        <CSSTransition
          key={'css' + idx}
          in={true}
          timeout={300}
          classNames="fall">
          <div key={idx} ref={divRef} className="transaction-container">
            <div className="edit-icon">
              <button onClick={this.handleTest}>
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" /><path d="M0 0h24v24H0z" fill="none" /></svg>
              </button>
            </div>
            <div className="grid">
              <p>{idx + 1}</p>
              <p>{transaction.date}</p>
              <p>{transaction.name}</p>
              <p>{transaction.type}</p>
              <p>{transaction.amount}</p>
            </div>
            <div className="delete-icon">
              <button onClick={() => {
                this.handleComponentState();
                divRef.current.value = idx;
                console.log(divRef.current.value);
                this.handleClickDelete(transaction.id);
                // if (idx === divRef.current.value) divRef.current.classList.add('fall');
                // this.props.handleDeleteTransaction(transaction.id);
              }}>
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" /><path d="M0 0h24v24H0z" fill="none" /></svg>
              </button>
            </div>
            <div className="spacer"></div>
          </div>
        </CSSTransition>
      );
    });

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
