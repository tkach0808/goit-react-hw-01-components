import React from 'react';
import PropTypes from 'prop-types';

import s from '../Statistics.module.css';

function randomColor() {
  return Math.floor(Math.random() * 16777215).toString(16);
}

const ListItem = ({ label, percentage }) => {
  return (
    <li
      className={s.statlistItem}
      style={{ backgroundColor: `#${randomColor()}` }}
    >
      <span className={s.textContent}>{label}</span>
      <span className={s.itemPercentage}>{percentage}%</span>
    </li>
  );
};

ListItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default ListItem;
