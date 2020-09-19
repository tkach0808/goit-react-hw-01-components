import React from 'react';
import styles from './friendlist.module.css';

function FriendList({ friends }) {
  return (
    <ul className={styles.friendList}>
      {friends.map(friend => (
        <li className={styles.friendItem} key={friend.id}>
          <span
            className={friend.isOnline ? styles.online : styles.outline}
          ></span>
          <img
            className={styles.avatar}
            src={friend.avatar}
            alt={friend.name}
            width="48"
          />
          <p className={styles.name}>{friend.name}</p>
        </li>
      ))}
    </ul>
  );
}

export default FriendList;
