import React from "react";
import PropTypes from "prop-types";
import css from './Statistics.module.css'

export const Statistics = ({ title, stats }) => {
  const statEl = stats.map(({ id,label,percentage }) => (
    <li className={css.item} key={id}>
      <span className="label">{label}</span>
      <span className="percentage">{percentage}%</span>
    </li>
  ))
return(
  <section className={css.statistics}>
    <h2 className={css.title}>{title}</h2>
    <ul className="stat-list">{statEl}</ul>
  </section> )
};
Statistics.propTypes = {
  title: PropTypes.string, 
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      percentage: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
};
