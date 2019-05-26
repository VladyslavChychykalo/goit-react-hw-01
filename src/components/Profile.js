import React from 'react';
import PropTypes from 'prop-types';

const Profile = ({ user }) =>
  console.log(user) || (
    <div className="profile">
      <div className="description">
        <img src={user.avatar} alt="user avatar" className="avatar" />
      </div>

      <p className="name">{user.name}</p>
      <p className="tag">{user.tag}</p>
      <p className="location">{user.location}</p>

      <ul className="stats">
        <li>
          <span className="label">Followers </span>
          <span className="quantity">{user.stats.followers}</span>
        </li>
        <li>
          <span className="label">Views </span>
          <span className="quantity">{user.stats.views}</span>
        </li>
        <li>
          <span className="label">Likes </span>
          <span className="quantity">{user.stats.likes}</span>
        </li>
      </ul>
    </div>
  );

Profile.propTypes = {
  user: PropTypes.objectOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      tag: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,

      stats: PropTypes.objectOf(
        PropTypes.shape({
          followers: PropTypes.number.isRequired,
          views: PropTypes.number.isRequired,
          likes: PropTypes.number.isRequired,
        }),
      ),
    }),
  ),
};

export default Profile;
