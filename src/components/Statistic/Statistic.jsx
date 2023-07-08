import { useContext } from 'react';
import { FeedbackContext } from '../App';
import {
  StatisticsWrapper,
  Title,
  List,
  ListItem,
  Name,
} from './Statistic.styled';

const Statistics = () => {
  const {
    feedback,
    countTotalFeedback,
    countPositiveFeedbackPercentage,
  } = useContext(FeedbackContext);
  const { good, natural, bad } = feedback;

  return (
    <StatisticsWrapper>
      <Title>Statistics</Title>
      <List>
        <ListItem>
          <Name>Good:</Name> {good}
        </ListItem>
        <ListItem>
          <Name>Natural:</Name> {natural}
        </ListItem>
        <ListItem>
          <Name>Bad:</Name> {bad}
        </ListItem>
        <ListItem>
          <Name>Total:</Name> {countTotalFeedback()}
        </ListItem>
        <ListItem>
          <Name>Positive feedback:</Name> {countPositiveFeedbackPercentage()}%
        </ListItem>
      </List>
    </StatisticsWrapper>
  );
};

export default Statistics;
