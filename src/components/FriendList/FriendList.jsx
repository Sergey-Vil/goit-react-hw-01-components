import React from "react";
import PropTypes from "prop-types";
import css from './FriendList.module.css'

export const FrendList = ({ friends}) => {
  const friendEl = friends.map(({ id,isOnline,avatar,name }) => (
   <li className={css.item} key={id}>
      <span className={isOnline ? css.online : css.offline}></span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
  <p className="name">{name}</p>
</li>
  ))
return(
  <ul className={css.friend_list}>{friendEl}</ul>
)
};

FrendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    
    })
  ),
};
