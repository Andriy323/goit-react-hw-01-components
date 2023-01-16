import css from 'components/CssModule/friendsModule/Friends.module.css';
import PropTypes from 'prop-types';

export default function FriendList({ friends }) {
  return (
    <ul className={css.friend_list}>
      {friends.map(frend => (
        <li className={css.item} key={frend.id}>
          <span className={frend.isOnline ? css.isOnlain : css.isOflain}></span>
          <img
            className={css.avatar}
            src={frend.avatar}
            alt="User avatar"
            width="48"
          />
          <p className={css.name}>{frend.name}</p>
        </li>
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};
