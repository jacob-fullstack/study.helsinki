const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Content = ({parts}) => {
  return (
    <>
      {parts.map((curValue, i) => (
        <Part key={i} name={curValue.name} exercises={curValue.exercises} />
      ))}
    </>
  );
}

const Total = (props) => {
  return (
    <p><b>
      total of 
      {' ' + props.parts.reduce((accumulator, curPart) => {
        return accumulator + curPart.exercises;
      }, 0) + ' '} 
      exercises
    </b></p>
  );
}

const Part = ({name, exercises}) => {
  return <p>{name} {exercises}</p>;
}

const Course = ({ courses }) => {
  return (
    <>
      {courses.map((course, i) => (
        <div key={i}>
          <Header course={course.name} />
          <Content parts={course.parts} />
          <Total parts={course.parts} />
        </div>
      ))}
    </>
  );
};

export default Course;
