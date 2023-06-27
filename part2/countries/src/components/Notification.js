const Notification = ({ message, isError }) => {
  if (message === null) {
    return null
  }

  const errorStyle = {
    color: isError ? 'red': 'green',
    background: 'lightgrey',
    fontSize: '20px',
    borderStyle: 'solid',
    borderRadius: '5px',
    padding: '10px',
    marginBottom: '10px',
  }

  return <div style={errorStyle}>{message}</div>
}

export default Notification
