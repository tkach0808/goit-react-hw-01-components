import React from 'react';
import styles from './uploadstats.module.css';
function randomColor() {
  return Math.floor(Math.random() * 16777215).toString(16);
}

function Statistics({ title, stats }) {
  return (
    <section className={styles.statistics}>
      <h2 className={styles.statisticsTitle}>{title}</h2>

      <ul className={styles.statlist}>
        {stats.map(item => (
          <li
            className={styles.statlistItem}
            style={{ backgroundColor: `#${randomColor()}` }}
            key={item.id}
          >
            <span className={styles.textContent}>{item.label}</span>
            <span className={styles.itemPercentage}>{item.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
export default Statistics;
