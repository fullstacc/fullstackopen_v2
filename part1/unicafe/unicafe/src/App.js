const App = () => {
  const course = {
    id: 1,
    name: 'Full Stack application development',
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
      }
    ]
  }

  console.log('youre looking at the correct page')

  return <Course course={course} />
}

export default App