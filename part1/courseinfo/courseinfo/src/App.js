const App = () => {

  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  const Header = ({course}) => {
    return(
      <h1>{course.name}</h1>
    )
  }

  const Content = ({parts}) => {
    console.log(parts)
    return (
      parts.map((item,index) => {
        return <li key={index}>{item.name} : {item.exercises}</li>
      })
    )
  }

  const Total = ({parts}) => {
    const totalExercises = parts.map(part => part.exercises).reduce((acc, currValue) => acc + currValue, 0);
    return <p>Total Exercises: {totalExercises}</p>
  }

  
  
    return (
      <div>
        <Header course={course} />
        <Content parts={course.parts}/>
        <Total parts={course.parts}/>
        
      </div>
    )
  } // end app

  




export default App