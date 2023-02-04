import React from 'react';
import PropTypes from 'prop-types';

const NavItem = ({ text, href }) => {
  return (
    <li className="nav-list__item">
      <a href={href}>{text}</a>
    </li>
  );
};

NavItem.propTypes = {
  text: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};

export default NavItem;
