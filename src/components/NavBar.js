import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css';

const navLinks = [
  {
    title: 'Home',
    path: '/',
  },
  {
    title: 'ShiftHub',
    path: '/shifthub',
  },
  {
    title: 'Overview',
    path: '/overview',
  },
];

const NavBar = () => {
  return (
    <nav>
      <ul>
        {navLinks.map((navLink) => (
          <li key={navLink.path}>
            <Link to={navLink.path}>{navLink.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
