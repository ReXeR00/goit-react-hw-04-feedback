import React, { useContext } from 'react';
import { FeedbackContext } from '../App';
import PropTypes from 'prop-types';
import {
  FeedbackWrapper,
  Title,
  ButtonsWrapper,
  Button,
} from './Feedback.styled';

const FeedbackOptions = () => {
  const { onLeaveFeedback } = useContext(FeedbackContext);
  const options = ['good', 'natural', 'bad'];

  return (
    <FeedbackWrapper>
      <Title>Please leave feedback</Title>
      <ButtonsWrapper>
        {options.map(btn => (
          <Button
            value={btn}
            key={btn}
            type="button"
            onClick={e => onLeaveFeedback(e)}
          >
            {btn}
          </Button>
        ))}
      </ButtonsWrapper>
    </FeedbackWrapper>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
