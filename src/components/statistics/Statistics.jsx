import { StatItem } from './statItem/StatItem';
import styles from './Statistics.module.css';

export const Statistics = ({ data }) => {
  return (
    <section className={styles.statistics}>
      {data.title || <h2 className={styles.title}>Upload stats</h2>}

      <ul className={styles.statlist}>
        {data.map(stat => (
          <StatItem
            key={stat.id}
            label={stat.label}
            percentage={stat.percentage}
          />
        ))}
      </ul>
    </section>
  );
};
