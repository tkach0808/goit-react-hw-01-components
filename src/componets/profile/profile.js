import React from 'react';
import PropTypes from 'prop-types';
import styles from './profile.module.css';

function Profile({ name, tag, location, avatar, stats }) {
  return (
    <div className={styles.profileCard}>
      <div className={styles.description}>
        <img src={avatar} alt={name} className={styles.img} />
        <p className={styles.text}>{name}</p>
        <p className={styles.text}>@{tag}</p>
        <p className={styles.text}>{location}</p>
      </div>

      <ul className={styles.stats}>
        <li className={styles.item}>
          <span className={styles.itemLabel}>Followers</span>
          <span className={styles.itemQuantity}>{stats.followers}</span>
        </li>
        <li className={styles.item}>
          <span className={styles.itemLabel}>Views</span>
          <span className={styles.itemQuantity}>{stats.views}</span>
        </li>
        <li className={styles.item}>
          <span className={styles.itemLabel}>Likes</span>
          <span className={styles.itemQuantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
Profile.defaultProps = {
  name: 'User',
  tag: 'Haaai',
  location: 'Honolulu',
  avatar:
    'http://alugueitatiba.com.br/application/modules/themes/views/default/assets/images/2.jpg',
  stats: {
    followers: 0,
    views: 0,
    likes: 0,
  },
};
Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.object.isRequired,
};
export default Profile;
