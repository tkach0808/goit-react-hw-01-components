import React from 'react';
import s from '../Statistics.module.css';
import ListItem from '../ListItem/ListItem';

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

export default StatList;
