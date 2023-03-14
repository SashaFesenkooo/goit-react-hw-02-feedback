import PropTypes from "prop-types";
import css from "components/statistics/Statistics.module.css"

export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return (
        <ul>
          <li><p className={css.text}>Good: {good}</p></li>
          <li><p className={css.text}>Neutral: {neutral}</p></li>
          <li><p className={css.text}>Bad: {bad}</p></li>
          <li><p className={css.text}>Total: {total}</p></li>
          <li><p className={css.text}>Positive feedback: {positivePercentage}%</p></li>
        </ul>
    )
}

Statistics.propTypes = {
good: PropTypes.number.isRequired,
neutral: PropTypes.number.isRequired,
bad:PropTypes.number.isRequired,
total:PropTypes.number.isRequired,
positivePercentage:PropTypes.number.isRequired
}