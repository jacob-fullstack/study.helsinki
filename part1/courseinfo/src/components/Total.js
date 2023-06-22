const Total = (props) => {
  return (
    <p>
      Number of exercises{" "}
      {props.parts.reduce((accumulator, curPart) => {
        return accumulator + curPart.exercises;
      }, 0)}
    </p>
  );
};

export default Total;
