import React from 'react';
import PropTypes from 'prop-types';

const Article = ({ tittle, text }) => {
  return (
    <li className="list__item">
      <h2>{tittle}</h2>
      <p>{text}</p>
    </li>
  );
};

Article.propTypes = {
  text: PropTypes.string.isRequired,
  tittle: PropTypes.string.isRequired,
};

export default Article;
