import PropTypes from 'prop-types'
// import userData from 'components/user.json'
import css from 'components/CssModule/profilModule/Profil.module.css'
export default function Profil({src, username, tag, followers, likes, location, views}) {

  return ( 

<div className= {css.profile}>
<div className={css.description}>
  <img
    src={src}
    alt="User avatar"
    className={css.avatar}
  />
  <p className={css.name}>{username}</p>
  <p className={css.tag}>@{tag}</p>
  <p className={css.location}>{location}</p>
</div>

<ul className={css.stats}>
  <li className={css.item}>
    <span className={css.label}>Followers:<br/></span>
    <span className={css.quantity}>{followers}</span>
  </li>
  <li className={css.item}>
    <span className={css.label}>Views:<br/></span>
    <span className={css.quantity}>{views}</span>
  </li>
  <li className={css.item}>
    <span className={css.label}>Likes:<br/></span>
    <span className={css.quantity}>{likes}</span>
  </li>
</ul>
</div>

)
}
 
Profil.propTypes = {
  src: PropTypes.string,
  username: PropTypes.string,
  tag: PropTypes.string,
  followers: PropTypes.number,
  likes: PropTypes.number,
  location: PropTypes.string,
  views: PropTypes.number,
}