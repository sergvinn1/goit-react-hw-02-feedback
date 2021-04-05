import React from 'react';
import PropTypes from 'prop-types';
import s from './Statistics.module.scss';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      <p className={s.item}>Good:{good}</p>
      <p className={s.item}>Neutral:{neutral}</p>
      <p className={s.item}>Bad:{bad}</p>
      <p className={s.item}>Total:{total}</p>
      <p className={s.item}>Positive feedback:{positivePercentage} %</p>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
