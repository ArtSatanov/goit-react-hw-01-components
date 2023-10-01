export const Avatar = ({avatar,username,tag,location}) => {
   return (
      <div className="description">
    <img
      src={avatar}
      alt={username}
      className="avatar"
    />
    <p className="name">P{username}</p>
    <p className="tag">@{tag}</p>
    <p className="location">{location}</p>
  </div>
   );
}


