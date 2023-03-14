import css from "components/feedbackOptions/FeedbackOptions.module.css"

import PropTypes from "prop-types";

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  
  return (
    <div>
      {options.map(el =>(
      <button key={el} className={css.btn} 
          type="button" name={el} 
          onClick={onLeaveFeedback}>{el}</button>
      ))}
    </div>
  )
}

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired
}