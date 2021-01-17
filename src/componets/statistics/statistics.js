import React from 'react';
import PropTypes from 'prop-types';
import StatList from './Items';
import s from './Statistics.module.css';

function Statistics({ title, stats }) {
  return (
    <section className={s.statistics}>
      {title !== undefined && title.length > 0 ? (
        <h2 className={s.statisticsTitle}>{title}</h2>
      ) : null}

      <StatList items={stats} />
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};

export default Statistics;
