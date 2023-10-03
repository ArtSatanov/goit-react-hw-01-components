import styles from "./StatItem.module.css"

export const StatItem = ({ lable, percentage }) => {
   return ( 
      <li className={styles.name}>
      <span className={styles.label}>{lable}</span>
      <span className={styles.percentage}>{percentage}</span>
      </li>
   )
}