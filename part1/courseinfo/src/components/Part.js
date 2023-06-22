const Part = (props) => {
  return props.parts.map((part, index) => <p>{part.name} {part.exercises}</p>);
};

export default Part;
