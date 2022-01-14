
import { Statistics } from "./components/Statistics/Statistics";
import { Section } from "./components/Section/Section";
import {FeedbackOptions} from './components/FeedbackOptions/FeedbackOptions'
import React from "react";



export class App extends React.Component{
  state = {
        good: 0,
        neutral: 0,
        bad: 0,
    }

    countTotalFeedback = () => {
        const { good, neutral, bad } = this.state;
        const total = good + neutral + bad;
        return total;
}

    countPositiveFeedbackPercentage = (total) => {
         const { good} = this.state;
        const positivePercentage = Math.round(good * 100 / total);
        return positivePercentage;
    }
    
    onLeaveFeedback = (e) => {
        const name = e.target.value;
        this.setState((prevState) => {
            return {
                [name]: (prevState[name] += 1),  
            } 
        });
    }

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage(total);
    const options = Object.keys(this.state);
    return (
      <Section title="Please leave feedback">
      
        <FeedbackOptions options={options} onLeaveFeedback={ this.onLeaveFeedback}/>
      
        <Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={positivePercentage}/>
            
      </Section>  
    )
}
}

 

  
 
 
 

  
 

