import styles from "./Stat.module.css"

export const Stat = ({followers,views,likes }) => {
   return (
        <ul className={styles.stats}>
    <li>
      <span className={styles.label}>Followers</span>
      <span className={styles.quantity}>1000</span>
    </li>
    <li>
      <span className={styles.label}>Views</span>
      <span className={styles.quantity}>2000</span>
    </li>
    <li>
      <span className={styles.label}>Likes</span>
      <span className={styles.quantity}>3000</span>
    </li>
  </ul>

   )
}