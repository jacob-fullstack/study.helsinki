import { useState } from "react";

const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{text !== "positive" ? value : value + "%"}</td>
    </tr>
  );
};
const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad;
  const average = (good - bad) / (good + neutral + bad);
  const positive = (good / (good + neutral + bad)) * 100;

  return (
    <>
      <h2>statistics</h2>

      {all == 0 ? (
        <p>No feedback given</p>
      ) : (
        <table>
          <tbody>
            <StatisticLine text="good" value={good} />
            <StatisticLine text="neutral" value={neutral} />
            <StatisticLine text="bad" value={bad} />
            <StatisticLine text="all" value={all} />
            <StatisticLine text="average" value={average} />
            <StatisticLine text="positive" value={positive} />
          </tbody>
        </table>
      )}
    </>
  );
};
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleSubmit = () => {
    console.log(good, neutral, bad);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>give feedback</h2>
      <div>
        <button type="button" onClick={() => setGood(good + 1)}>
          good
        </button>
        <button type="button" onClick={() => setNeutral(neutral + 1)}>
          neutral
        </button>
        <button type="button" onClick={() => setBad(bad + 1)}>
          bad
        </button>
      </div>
      <br />
      <br />
      <Statistics good={good} neutral={neutral} bad={bad} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default App;
