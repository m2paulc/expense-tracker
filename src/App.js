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
    openModal: false
  };
  handleOpenModal = () => {
    this.setState(() => ({ openModal: true }));
  };
  handleCloseModal = () => {
    this.setState(() => ({ openModal: false }));
  };
  render() {
    return (
      <div>
        <Header title={this.state.title}></Header>
        <Action handleOpenModal={this.handleOpenModal}></Action>
        <Balance></Balance>
        <Transactions></Transactions>
        <AddTransaction
          openModal={this.state.openModal}
          handleCloseModal={this.handleCloseModal}></AddTransaction>
      </div >
    );
  }
};

