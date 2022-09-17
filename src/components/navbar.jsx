import React, { memo, PureComponent } from 'react';

const Navbar = memo((props) => {
  return (
    <header className="navbar">
      <i className="navbar-logo fa-solid fa-leaf"></i>
      <span>Habit Tracker</span>
      <span className="navbar-count">{props.totalCount}</span>
    </header>
  );
});

export default Navbar;
