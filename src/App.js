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
    remainingBalance: 1000,
    totalExpenses: 0,
    transactionDetails: []
  };
  handleOpenModal = () => {
    this.setState(() => ({ openModal: true }));
  };
  handleCloseModal = () => {
    this.setState(() => ({ openModal: false }));
  };
  handleFormatDate = (date) => {
    let splitDate = date.split('-');
    return `${splitDate[1]}/${splitDate[2]}/${splitDate[0]}`;
  };
  handleAddTransaction = (date, name, type, amount) => {
    let obj = {};
    obj['date'] = this.handleFormatDate(date);
    obj['name'] = name;
    obj['type'] = type;
    obj['amount'] = amount;
    let updatedState = [...this.state.transactionDetails, obj];
    this.setState({ transactionDetails: updatedState });
  };
  handleTotalExpenses = () => {
    let currState = [...this.state.transactionDetails];
    const total = currState.reduce((accumulator, transaction) => {
      return accumulator + parseFloat(transaction.amount);
    }, 0);
    return total;
  };
  handleRemainingBalance = () => {
    return this.state.remainingBalance - this.handleTotalExpenses();
  };
  handleDeleteTransaction = (name) => {
    console.log(name);
    const data = this.state.transactionDetails.filter((transaction) => name !== transaction.name);
    console.log(data);
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
        // console.log(localStorage);
        this.setState({ totalExpenses: this.handleTotalExpenses() });
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
          <Balance handleTotalExpenses={this.handleTotalExpenses}
            handleRemainingBalance={this.handleRemainingBalance}></Balance>
          <Transactions transactionDetails={this.state.transactionDetails}
            handleDeleteTransaction={this.handleDeleteTransaction}></Transactions>
        </div>
        <AddTransaction
          openModal={this.state.openModal}
          handleCloseModal={this.handleCloseModal}
          handleAddTransaction={this.handleAddTransaction}></AddTransaction>
      </div >
    );
  }
};

