import React from 'react';
import s from './Statistics.module.css';

function randomColor() {
  return Math.floor(Math.random() * 16777215).toString(16);
}

const ListItem = ({ id, label, percentage }) => {
  return (
    <li
      className={s.statlistItem}
      style={{ backgroundColor: `#${randomColor()}` }}
      key={id}
    >
      <span className={s.textContent}>{label}</span>
      <span className={s.itemPercentage}>{percentage}%</span>
    </li>
  );
};

const StatList = ({ items }) => {
  if (items.length === 0) return null;
  return <ul className={s.statlist}>{items.map(ListItem)}</ul>;
};

export default StatList;
