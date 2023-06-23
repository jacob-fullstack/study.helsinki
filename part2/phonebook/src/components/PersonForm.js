const PersonForm = ({
  onSubmit,
  newName,
  newNumber,
  onChangeNewName,
  onChangeNewNumber,
}) => {
  return (
    <form onSubmit={onSubmit}>
      <h2>add a new</h2>
      <div>
        name: <input value={newName} onChange={onChangeNewName} />
      </div>
      <div>
        number: <input value={newNumber} onChange={onChangeNewNumber} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  )
}

export default PersonForm
