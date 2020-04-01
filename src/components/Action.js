import React from 'react';

export const Action = (props) => {
  return (
    <div>
      <button onClick={props.handleOpenModal}>Add New Expense</button>
    </div>
  );
};
