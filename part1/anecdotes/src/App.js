import { useState } from "react";

// Creating Display component

const Display = ({ text }) => <h1>{text}</h1>;

// Creating a simple button component
const Button = (props) => {
  return <button onClick={props.handleclick}> {props.text}</button>;
};

// Created a fun History component like from the previous exercise just for refactoring code
const History = (props) => {
  // Spreads the votes array and gets the maximum votes
  const anecdotesMostVoted = Math.max(...props.votes);

  // Returns the indexOf previously got maximum vote on votes array
  const locateAnecdote = props.votes.indexOf(anecdotesMostVoted);

  if (anecdotesMostVoted === 0) {
    return <div>Not Voted Yet</div>;
  }

  return <div>{props.anecdotes[locateAnecdote]} Voted: {anecdotesMostVoted} times.</div>;
};

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
  ];

  // State management for anecdote array
  const [selected, setSelected] = useState(0);

  // State management for registered votes
  const [votes, setVotes] = useState(new Uint8Array(anecdotes.length));
  // console.log(votes);

  // Function that selects random anecdote from the [...anecdotes]
  const randomAnecdote = () =>
    setSelected(Math.floor(Math.random() * anecdotes.length));

  // Function to make vote on different anecdotes and update a newCopy of array everytime voting is done. This is done to save votes on each anecdote.

  const makeVote = (selected) => {
    const newList = [...votes];
    newList[selected] += 1;
    setVotes(newList);
    // console.log(votes);
  };

  return (
    <div>
      <Display text="Anecdote of the day:" />
      <div>{anecdotes[selected]}</div>
      <p> Votes Registered: {votes[selected]}</p>
      <Button handleclick={randomAnecdote} text="Next Anecdote" />
      <Button handleclick={() => makeVote(selected)} text="Vote" />

      <Display text="Anecdote with most votes:"  />
      <History votes={votes} anecdotes={anecdotes} />
      
    </div>
  );
};

export default App;
