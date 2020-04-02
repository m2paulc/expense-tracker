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
  handleShowTransactions = () => {

  };
  render() {
    return (
      <div>
        <Header title={this.state.title}></Header>
        <Action handleOpenModal={this.handleOpenModal}></Action>
        <Balance></Balance>
        <Transactions transactionDetails={this.state.transactionDetails}></Transactions>
        <AddTransaction
          openModal={this.state.openModal}
          handleCloseModal={this.handleCloseModal}></AddTransaction>
      </div >
    );
  }
};

