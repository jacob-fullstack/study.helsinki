import { useState } from 'react'

const Filter = ({ filter, onChange }) => {
  return (
    <p>
      filter shown with
      <input value={filter} onChange={onChange} />
    </p>
  )
}

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

const Persons = ({ list, filter }) => {
  return list
    .filter((p, i) => p.name.indexOf(filter) >= 0)
    .map((p, i) => (
      <p key={p.id}>
        {p.name} {p.number}
      </p>
    ))
}
const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 },
  ])
  const [newName, setNewName] = useState('')
  const handleChangeNewName = (e) => {
    setNewName(e.target.value)
  }
  const [newNumber, setNewNumber] = useState('')
  const handleChangeNewNumber = (e) => {
    setNewNumber(e.target.value)
  }
  const [filter, setFilter] = useState('')
  const handleChangeFilter = (e) => {
    setFilter(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const existName = persons.filter((p, i) => p.name === newName).length > 0
    if (existName) {
      alert(`${newName} is already added to phonebook`)
      return
    }
    setPersons(persons.concat({ name: newName, number: newNumber, id:persons.length + 1 }))

    setNewName('')
    setNewNumber('')
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} onChange={handleChangeFilter} />

      <PersonForm
        onSubmit={handleSubmit}
        newName={newName}
        newNumber={newNumber}
        onChangeNewName={handleChangeNewName}
        onChangeNewNumber={handleChangeNewNumber}
      />

      <h2>Numbers</h2>
      <Persons list={persons} filter={filter}/>
    </div>
  )
}

export default App
