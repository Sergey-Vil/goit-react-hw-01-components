import React from "react";
// import PropTypes from "prop-types";
import css from './FriendList.module.css'

export const FrendList = ({ friends}) => {
  const friendEl = friends.map((friend) => (
   <li className={css.item} key={friend.id}>
      <span className={friend.isOnline ? css.online : css.offline}></span>
      <img className="avatar" src={friend.avatar} alt="User avatar" width="48" />
  <p className="name">{friend.name}</p>
</li>
  ))
return(
  <ul className={css.friend_list}>{friendEl}</ul>
)
};
// Statistics.propTypes = {
//   title: PropTypes.string, 
//   stats: PropTypes.arrayOf(
//     PropTypes.shape({
//       percentage: PropTypes.number.isRequired,
//       label: PropTypes.string.isRequired,
//       id: PropTypes.string.isRequired,
//     })
//   ),
// };
