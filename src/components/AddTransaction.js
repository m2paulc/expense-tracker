import React from 'react';
import ReactModal from 'react-modal';

ReactModal.setAppElement('#root');
export default class AddTransaction extends React.Component {
  state = {
    error: undefined,
    payment: 'Credit Card'
  };
  handlePaymentMethod = (event) => this.setState({ payment: event.target.value });

  handleFormSubmit = (e) => {
    e.preventDefault();
    let dateTransaction = e.target.elements.transactionDate.value;
    let nameTransaction = e.target.elements.transactionName.value.trim();
    let typeTransaction = this.state.payment;
    let amountTransaction = parseFloat(e.target.elements.transactionAmount.value);
    const error = this.props.handleAddTransaction(dateTransaction, nameTransaction, typeTransaction, amountTransaction);
    this.setState(() => ({ error }));
    this.props.handleCloseModal();
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
        closeTimeoutMS={200}
        className="modal">
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
          <div className="add-transaction__date">
            <label htmlFor="transactionDate">Date: </label>
            <input type="date"
              name="transactionDate"
              min='2018-01-01'
              max={this.handleMaxDate()}
              required></input>
          </div>
          <div className="transaction-name">
            <label htmlFor="transactionName">Description: </label>
            <input type="text"
              name="transactionName"
              className="add-transaction__name" required></input>
          </div>
          <label className="payment-method">Payment Method:
             <select name="paymentMethod" value={this.state.payment} onChange={this.handlePaymentMethod}>
              <option value="Credit Card">Credit Card</option>
              <option value="Paypal">Paypal</option>
              <option value="Cash">Cash</option>
            </select>
          </label>
          <div className="amount">
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