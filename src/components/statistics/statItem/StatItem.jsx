import styles from "./StatItem.module.css"

export const StatItem = ({ label, percentage }) => {
   return ( 
      <li className={styles.name}
      style={{ backgroundColor: randomColor() }}>
      <span className={styles.label}>{label}</span>
      <span className={styles.percentage}>{percentage}%</span>
      </li>
   )
}

export const randomColor = () => {
  const color =
    'rgba(' +
    Math.round(Math.random() * 255) +
    ',' +
    Math.round(Math.random() * 255) +
    ',' +
    Math.round(Math.random() * 255) +
    ',' +
    0.5 +
    ')';

  return color;
};