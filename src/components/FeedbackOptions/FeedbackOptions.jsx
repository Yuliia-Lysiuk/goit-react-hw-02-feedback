import PropTypes from 'prop-types';
import React from "react"
import { Box, Button } from "./FeedbackOptions.styled"

export function FeedbackOptions ({onLeaveFeedback, options}){ 
  return (<Box>{
    options.map(option => (<Button type="button" key={option} onClick={onLeaveFeedback} value={option}>{option}</Button>))
  }
    </Box>)
    
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
};

