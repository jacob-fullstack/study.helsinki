
const Content = (props) => {
  return (
    <>
    {
      props.parts.map((curValue) => (
        <p>
          {curValue.name} {curValue.exercises}
        </p>
      ))
    }
    </>
  )
}

export default Content