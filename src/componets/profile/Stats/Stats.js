import React from 'react';
import PropTypes from 'prop-types';

import s from '../Profile.module.css';

const Stats = ({ followers, views, likes }) => {
  return (
    <ul className={s.stats}>
      <li className={s.item}>
        <span className={s.itemLabel}>Followers</span>
        <span className={s.itemQuantity}>{followers}</span>
      </li>
      <li className={s.item}>
        <span className={s.itemLabel}>Views</span>
        <span className={s.itemQuantity}>{views}</span>
      </li>
      <li className={s.item}>
        <span className={s.itemLabel}>Likes</span>
        <span className={s.itemQuantity}>{likes}</span>
      </li>
    </ul>
  );
};

Stats.propTypes = {
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};
export default Stats;
