import React, {Component} from "react";
import { Notification } from "components/notification/Notification";
import { FeedbackOptions } from "./feedbackOptions/FeedbackOptions";
import { Section } from "./section/Section";
import { Statistics } from "./statistics/Statistics";


export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  hadleIncrement = (evt) => {
    const { name }=evt.target
     this.setState((prevState) => ({
      [name]: prevState[name] + 1,
      })
    )
  }

   countTotalFeedback() {
return Object.values(this.state).reduce((acc, item) => { return acc + item }, 0)
  }

  countPositiveFeedbackPercentage() {
    const { good } = this.state;
    return Math.round((good / this.countTotalFeedback()) * 100);
  }
      

  render() {
    const { good, neutral, bad } = this.state
        
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.hadleIncrement} />
        </Section>

        <Section title="Statistics">
          {good === 0 && neutral === 0 && bad === 0 ?
            <Notification message="There is no feedback" /> :
            <Statistics good={good} neutral={neutral}
              bad={bad} total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()} />}
        </Section>
      </>    
  );
  }
};
