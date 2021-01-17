import React from 'react';
import PropTypes from 'prop-types';

import FriendListItem from './FriendListItem';
import s from './Friendlist.module.css';

function FriendList({ friends }) {
  if (friends.length === 0) return null;
  return <ul className={s.friendList}>{friends.map(FriendListItem)}</ul>;
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    }),
  ),
};

export default FriendList;
