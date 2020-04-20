import React from 'react';
import ReactModal from 'react-modal';

ReactModal.setAppElement('#root');
export default class AddTransaction extends React.Component {
  state = {
    error: undefined
  };
  handleFormSubmit = (e) => {
    e.preventDefault();
    let dateTransaction = e.target.elements.transactionDate.value;
    let nameTransaction = e.target.elements.transactionName.value.trim();
    let typeTransaction = (!e.target.elements.transactionCash.value) ? 'Credit' : 'Cash';
    let amountTransaction = parseFloat(e.target.elements.transactionAmount.value);
    const error = this.props.handleAddTransaction(dateTransaction, nameTransaction, typeTransaction, amountTransaction);
    this.setState(() => ({ error }));
  };
  handleMaxDate = () => {
    let todaysDate = new Date();
    let month = todaysDate.getMonth() + 1;
    let day = todaysDate.getDate();
    let year = todaysDate.getFullYear();

    if (month < 10) month = `0${month.toString()}`;
    if (day < 10) day = `0${day.toString()}`;

    let maxDate = `${year}-${month}-${day}`;
    return maxDate;
  };
  render() {
    return (
      <ReactModal
        isOpen={this.props.openModal}
        contentLabel='Add Transaction'
      >
        <div className="exit-container">
          <button onClick={this.props.handleCloseModal} className="exit-button">X</button>
        </div>
        <div className="add-transaction__title">
          <h2>Add an Expense</h2>
        </div>
        <div>
          {this.state.error && <h4 className="add-error">{this.state.error}</h4>}
        </div>
        <form
          onSubmit={this.handleFormSubmit}
          className="add-transaction">
          <div>
            <label htmlFor="transactionDate">Date: </label>
            <input type="date"
              name="transactionDate"
              className="add-transaction__date"
              min='2018-01-01'
              max={this.handleMaxDate()}
              required></input>
          </div>
          <div>
            <label htmlFor="transactionName">Name: </label>
            <input type="text"
              name="transactionName"
              className="add-transaction__name" required></input>
          </div>
          <div>
            <h4>Type</h4>
            <label htmlFor="transactionCredit">Credit Card: </label>
            <input type="text" name="transactionCredit" className="add-transaction__credit"></input>
            <div className="">
              <input type="checkbox" name="transactionCash" className="add-transaction__cash"></input>
              <label htmlFor="transactionCash">Cash</label>
            </div>
          </div>
          <div>
            <label htmlFor="transactionAmount">Amount: </label>
            <input type="number"
              name="transactionAmount"
              className="add-transaction__amount" required></input>
          </div>
          <button className="button">Add</button>
        </form>
      </ReactModal >
    );
  }
}