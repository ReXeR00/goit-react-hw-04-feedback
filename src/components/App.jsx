// App.jsx
import React, { useState, createContext } from 'react';
import PropTypes from 'prop-types';
import FeedbackOptions from './Feedback/Feedback';
import Statistics from './Statistic/Statistic';
import Notification from './Notification/Notification';
import './App.css';

export const FeedbackContext = createContext();

const App = () => {
  const [feedback, setFeedback] = useState({ good: 0, natural: 0, bad: 0 });

  const onLeaveFeedback = e => {
    const currentBtnValue = e.currentTarget.value;
    setFeedback(prevFeedback => ({
      ...prevFeedback,
      [currentBtnValue]: prevFeedback[currentBtnValue] + 1,
    }));
  };

  const countTotalFeedback = () => {
    const valuesArr = Object.values(feedback);
    return valuesArr.reduce((acc, val) => {
      acc += val;
      return acc;
    });
  };

  const countZero = () => {
    const { good, natural, bad } = feedback;
    return good === 0 && natural === 0 && bad === 0;
  };

  const countPositiveFeedbackPercentage = () => {
    const { good } = feedback;
    const total = countTotalFeedback();
    return Math.trunc((good / total) * 100);
  };

  const btnNames = Object.keys(feedback);

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        onLeaveFeedback,
        countTotalFeedback,
        countZero,
        countPositiveFeedbackPercentage,
      }}
    >
      <section>
        <FeedbackOptions options={btnNames} />
        {countZero() ? (
          <Notification message="No feedback given" />
        ) : (
          <Statistics />
        )}
      </section>
    </FeedbackContext.Provider>
  );
};

App.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default App;
