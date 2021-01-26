import React from 'react';
import PropTypes from 'prop-types';

import ListItem from '../ListItem/ListItem';
import s from '../Statistics.module.css';

const StatList = ({ items }) => {
  if (items.length === 0) return null;
  return (
    <ul className={s.statlist}>
      {items.map(item => (
        <ListItem
          key={item.id}
          id={item.id}
          label={item.label}
          percentage={item.percentage}
        />
      ))}
    </ul>
  );
};

StatList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ).isRequired,
};
export default StatList;
