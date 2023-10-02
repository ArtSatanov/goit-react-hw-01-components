import styles from "./Avatar.module.css";

export const Avatar = ({ avatar, username, tag, location }) => {
   return (
     <div className={styles.description}>
    <img
      src={avatar}
      alt={username}
      className={styles.avatar}
    />
    <p className={styles.name}>{username}</p>
    <p className={styles.tag}>@{tag}</p>
    <p className={styles.location}>{location}</p>
  </div>
   );
}

