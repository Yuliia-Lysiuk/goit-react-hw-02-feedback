import PropTypes from 'prop-types';
import React from "react";
import { Item, Text, Title } from "./Statistics.styled";

export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    
    return (
        < div >
            <Title>Statistics</Title>
           {total === 0 ? (
                <Text>There is no feedback</Text>
            ) : (
                <ul>
                    <Item>good: {good}</Item>
                    <Item>neutral: {neutral}</Item>
                    <Item>bad: {bad}</Item>
                    <Item>total: {total}</Item>
                    <Item>positive Feedback: {positivePercentage} %</Item>
                </ul>
                        )
        } 
        </div>    
    )
}

Statistics.propTypes = {
  good: PropTypes.number,
  bad: PropTypes.number,
  neutral: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};