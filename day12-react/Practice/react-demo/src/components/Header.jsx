/** @format */

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Header(props) {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <div>
      <button onClick={toggleMenu}>Lesson Form</button>
      <ul style={{ display: showMenu ? 'block' : 'none' }}>
        <li>
          {' '}
          <Link to="/signup">Practice 1</Link>
        </li>
        <li>
          {' '}
          <Link to="/register">Practice 2</Link>
        </li>
        <li>
          {' '}
          <Link to="/login">Practice 3</Link>
        </li>
        <li>
          {' '}
          <Link to="/contact">Practice 4</Link>
        </li>
        <li>
          {' '}
          <Link to="/medical">Exercise 1</Link>
        </li>
        <li>
          {' '}
          <Link to="/compose-email">Exercise 2</Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
