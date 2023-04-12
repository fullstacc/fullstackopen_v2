const Course = ({ course }) => {
    const totalExercises = course.parts.reduce((sum, part) => sum + part.exercises, 0);


    return (
      <div>
        <h1>{course.name}</h1>
        <div>{course.parts.map((part, index) => {
          return (<p key={part.id}> {part.name} : {part.exercises} </p>)
        })}
        </div>

        

        <div>Total exercises: {totalExercises}</div>

      </div>
    )
  }

  export default Course