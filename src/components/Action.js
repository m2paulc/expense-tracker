import React from 'react';

export const Action = (props) => {
  return (
    <div className="wrapper">
      <button onClick={props.handleOpenModal} className="button">Add New Expense</button>
    </div >
  );
};
