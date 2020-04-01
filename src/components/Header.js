import React from 'react';

export const Header = (props) => {
  return (
    <div className="header">
      <div className="container">
        <h1 className="header__title">{props.title}</h1>
      </div>
    </div>
  );
};
