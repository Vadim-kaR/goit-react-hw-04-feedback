import { useState } from 'react';
import { FeedbackOptions } from 'Componets/FeedbackOptions/FeedbackOptions';
import { Statistic } from 'Componets/Statistic/Statistic';
import { StatisticList } from 'Componets/StatisticList/StatisticList';
import { Container } from 'Componets/MainContainer/Container';

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const togleStatisticButton = name => {
    switch (name) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;

      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return Math.round((good / total) * 100) || 0;
  };

  return (
    <>
      <Container>
        <h1>Please leave feedback</h1>
        <FeedbackOptions
          options={{ good, neutral, bad }}
          onLeaveFeedback={togleStatisticButton}
        />
        <Statistic title="Statistics" total={countTotalFeedback()}>
          <StatisticList
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage}
          />
        </Statistic>
      </Container>
    </>
  );
}

export { App };
