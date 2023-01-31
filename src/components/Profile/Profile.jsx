import React from "react";
import PropTypes from "prop-types";
import css from './Profile.module.css'



export const Profile = ({ username, tag, location, avatar,stats }) => {
return(<>
  <div className={css.profile}s>
      <div className="description">
        <img
            src={avatar}
            alt="User avatar"
            className={css.avatar}
        /> 
      <p className={css.name}>{username}</p>
      <p className="tag">@{tag}</p>
      <p className="location">{location}</p>
      </div>

    <ul className={css.stats}>
        <li>
          <span className="label">Followers</span>
        <span className={css.quantity}>{stats.followers}</span>
        </li>
        <li>
          <span className="label">Views</span>
          <span className={css.quantity}>{stats.views}</span>
        </li>
        <li>
          <span className="label">Likes</span>
          <span className={css.quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div></>)
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired, 
  stats: PropTypes.objectOf(PropTypes.number),
  //   PropTypes.arrayOf(PropTypes.shape([
  //   views:PropTypes.number.isRequired,
  //   likes:PropTypes.number.isRequired,
  // ])),
  // views:PropTypes.number.isRequired,
  // likes:PropTypes.number.isRequired,
};
// export default Profile