import React from 'react';
import { Header } from './components/Header';
import { Action } from './components/Action';
import { Balance } from './components/Balance';
import Transactions from './components/Transactions';
import AddTransaction from './components/AddTransaction';
import './styles/main.scss';

export default class App extends React.Component {
  state = {
    title: 'Expense Tracker',
    openModal: false,
    remainingBalance: 0,
    totalExpenses: 0,
    transactionDetails: [
      { 'date': '03/20/2020', 'name': 'grocery', 'type': 'credit', 'amount': 25.00 },
      { 'date': '03/25/2020', 'name': 'pharmacy', 'type': 'cash', 'amount': 10.00 }
    ]
  };
  handleOpenModal = () => {
    this.setState(() => ({ openModal: true }));
  };
  handleCloseModal = () => {
    this.setState(() => ({ openModal: false }));
  };
  handleAddTransaction = (date, name, type, amount) => {
    let obj = {};
    obj['date'] = date;
    obj['name'] = name;
    obj['type'] = type;
    obj['amount'] = amount;
    let updatedState = [...this.state.transactionDetails, obj];
    this.setState({ transactionDetails: updatedState });
  };
  componentDidMount() {
    try {
      const json = localStorage.getItem('transactionDetails');
      const transactions = JSON.parse(json);
      if (transactions) {
        this.setState(() => ({ transactionDetails: transactions }));
      }
    } catch (err) {
      console.error(err);
    }
  };
  componentDidUpdate(prevProps, prevState) {
    try {
      if (prevState.transactionDetails.length !== this.state.transactionDetails.length) {
        const json = JSON.stringify(this.state.transactionDetails);
        localStorage.setItem('transactionDetails', json);
        console.log(localStorage);
      }
    } catch (err) {
      console.error(err);
    }
  }
  render() {
    return (
      <div>
        <Header title={this.state.title}></Header>
        <div className="container">
          <Action handleOpenModal={this.handleOpenModal}></Action>
          <Balance></Balance>
          <Transactions transactionDetails={this.state.transactionDetails}></Transactions>
        </div>
        <AddTransaction
          openModal={this.state.openModal}
          handleCloseModal={this.handleCloseModal}
          handleAddTransaction={this.handleAddTransaction}></AddTransaction>
      </div >
    );
  }
};

