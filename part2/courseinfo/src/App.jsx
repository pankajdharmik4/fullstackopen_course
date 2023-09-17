
const Header = (props)=>{
  console.log(props)
  return(
    <h1>{props.course.name}</h1>
  )
}

const Content = ({parts})=>{
  console.log(parts)
  return(
    <>
    {parts.map((part) => <Part key={part.id} part={part}/>)}
    </>
  )
}

const Part = ({part}) =>{
  return(
    <p>{part.name} {part.exercises}</p>
  )
}

const Total = ({parts})=>{
  const sumx = parts.reduce((sum,part)=> sum+ part.exercises,0 )
  return(
    <>
      <strong>Total of {sumx} exercises</strong>
    </>
  )
}

const Course = ({course})=>{
  return(
  <>
      <Header course = {course}/>
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
  </>)
}

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: "Redux",
        exercises: 11,
        id:4
      }
    ]
  };

  return (
    <div>
      <Course course={course}/>
    </div>
  )
}

export default App