import React from 'react';
import NavItem from '../NavItem';
import navItems from './navItems.json';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <a href="" className="logo">
          My logo
        </a>

        <nav>
          <ul className="nav-list">
            {navItems.map(({ text, href }) => (
              <NavItem key={href} text={text} href={href} />
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
