import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <ul style={{ display: 'flex', listStyle: 'none', padding: 0 }}>
        <li style={{ margin: '0 10px' }}>
          <NavLink to="/">Конвертер</NavLink>
        </li>
        <li style={{ margin: '0 10px' }}>
          <NavLink to="/rates">Курсы валют</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
