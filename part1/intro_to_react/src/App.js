//The header component

const Header = (props) => { 
  
  return (
    <>
    <h1>{props.course}</h1>
    </>
  )
}

// The content component

const PartComponent = (props) => {
  return(
    <p> {props.part} {props.exercises}</p>
  )
}


const Content = (props) => {

  return(
    <>
      <p>
        <PartComponent part={props.part1} exercises = {props.exercises1}/>
      </p>
      <p>
        <PartComponent part={props.part2} exercises = {props.exercises2} />
      </p>
      <p>
        <PartComponent part={props.part3} exercises = {props.exercises3}/>
      </p>
    </>
  )
}

// The footer component

const Footer = (props) => {

  return(
    <>
      <p>
        Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}
      </p>
    </>
  )
}

const App = () => {

  return (
    <>
      <Header course='Half Stack Application Development' />

      <Content part1 = 'Fundamentals of React' part2 = 'Using props to pass data' part3 = 'State of a component' exercises1 = {10} exercises2 = {7} exercises3 = {14} />

      <Footer exercises1 = {10} exercises2 = {7} exercises3 = {14} />
    </>
  )
}

export default App;
