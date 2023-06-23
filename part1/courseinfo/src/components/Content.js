import Part from './Part'

const Content = (props) => {
  return (
    <>
    {
      props.parts.map((curValue, i) => (
        <Part key={i} name={curValue.name} exercises={curValue.exercises} />
      ))
    }
    </>
  )
}

export default Content