import React from 'react';

const Profile = props =>
  console.log(props) || (
    <div className="profile">
      <div className="description">
        <img src={props.user.avatar} alt="user avatar" className="avatar" />
      </div>

      <p className="name">{props.user.name}</p>
      <p className="tag">{props.user.tag}</p>
      <p className="location">{props.user.location}</p>

      <ul className="stats">
        <li>
          <span className="label">Followers </span>
          <span className="quantity">{props.user.stats.followers}</span>
        </li>
        <li>
          <span className="label">Views </span>
          <span className="quantity">{props.user.stats.views}</span>
        </li>
        <li>
          <span className="label">Likes </span>
          <span className="quantity">{props.user.stats.likes}</span>
        </li>
      </ul>
    </div>
  );

export default Profile;
// ==========================================================================
