import React from 'react';
import ReactModal from 'react-modal';

ReactModal.setAppElement('#root');
export default class AddTransaction extends React.Component {
  state = {
    error: undefined
  };
  handleFormSubmit = (e) => {
    e.preventDefault();
    let newTransaction = e.target.elements.transaction.value.trim();
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
        {this.state.error && <h4>{this.state.error}</h4>}
        <button onClick={this.props.handleCloseModal} className="exit-button">X</button>
        <form
          onSubmitForm={this.handleFormSubmit}
          className="add-transaction">
          <div>
            <label for="transaction-date">Date: </label>
            <input type="date"
              name="transaction-date"
              className="add-transaction__date"
              min='2018-01-01'
              max={this.handleMaxDate()}
              required></input>
          </div>
          <div>
            <label for="transaction-name">Name: </label>
            <input type="text"
              name="transaction-name"
              className="add-transaction__name" required></input>
          </div>
          <div>
            <h4>Type</h4>
            <label for="transaction-credit">Credit Card: </label>
            <input type="text" name="transaction-credit" className="add-transaction__credit"></input>
            <input type="checkbox" name="transaction-cash" className="add-transaction__cash"></input>
            <label for="transaction-cash">Cash</label>
          </div>
          <div>
            <label for="transaction-amount">Amount: </label>
            <input type="number"
              name="transaction-amount"
              className="add-transaction__amount" required></input>
          </div>
          <button className="button">Add</button>
        </form>
      </ReactModal >
    );
  }
}