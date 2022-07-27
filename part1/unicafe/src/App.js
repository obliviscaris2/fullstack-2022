import {useState} from 'react';

const Button = ({onClick, text}) => {
  return (
    <button onClick={onClick} >{text}</button>
  )
}

const Titles = (props) => {
  return(
    <h1>{props.text}</h1>
  )
}

const StatsDisplay = (props) => {
  return(
    <table>
      <tbody>
        <tr>
          <td>{props.stat} {props.score}</td>
        </tr>
      </tbody>
    </table>
  )
}

const Satistics = (props) => {
  const {good, neutral, bad} = props;
  const total = good + neutral + bad;

  if (total === 0) {
    return(
      <p>
        There is no feedback given
      </p>
    )
  }
  
  const average = (((good * 1) + (neutral * 0) + (bad + -1))/ total).toFixed(1);
  const positivePercent = ((good / total ) * 100).toFixed(1);

  return(
    <>
      <h3> The stats are,</h3>
      <StatsDisplay stat="Good: " score={good} />
      <StatsDisplay stat="Neutral: " score={neutral} />
      <StatsDisplay stat="Bad: " score={bad} />
      <StatsDisplay stat="Average: " score={average} />
      <StatsDisplay stat="Positive: " score={positivePercent} />

    </>
  )
}

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  // Functions/ Event Handlers for Buttons

  const goodButton = () => setGood(good + 1);
  const neutralButton = () => setNeutral(neutral + 1);
  const badButton = () => setBad(bad + 1);

  return (
    <>
      <Titles text='Give feedback'/>

      <Button text='Good' onClick={goodButton} />
      <Button text='Neutral' onClick={neutralButton}/>
      <Button text='Bad' onClick={badButton}/>

      <Titles text='Statistics'/>
      <Satistics good={good} neutral={neutral} bad={bad}/>
      
    </>
  );
}

export default App;
