import React from 'react';
import PropTypes from 'prop-types';

import s from './Profile.module.css';
import Stats from './Stats/Stats';

function Profile({ name, tag, location, avatar, stats }) {
  const { followers, views, likes } = stats;
  return (
    <div className={s.profileCard}>
      <div className={s.description}>
        <img src={avatar} alt={name} className={s.img} />
        <p className={s.text}>{name}</p>
        <p className={s.text}>@{tag}</p>
        <p className={s.text}>{location}</p>
      </div>

      <Stats followers={followers} views={views} likes={likes} />
    </div>
  );
}
Profile.defaultProps = {
  name: 'User',
  tag: 'Haaai',
  location: 'Honolulu',
  avatar:
    'http://alugueitatiba.com.br/application/modules/themes/views/default/assets/images/2.jpg',
};
Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
export default Profile;
