import { useEffect, useState } from 'react'
import PersonAPI from './PersonAPI'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import Notification from './components/Notification'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [message, setMessage] = useState({message: '', isError: false})

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

  useEffect(() => {
    PersonAPI.getAll().then(data => {
      console.log(data)
      setPersons(data)
    }).catch(error => {
      console.log('getAll error', error)
      setMessage({message: error, isError: true})
    })
  }, [])

  console.log('render', persons.length, 'persons')

  const handleSubmit = (e) => {
    e.preventDefault()

    const existPersons = persons.filter((p, i) => p.name === newName)
    if (existPersons.length > 0) {
      if (window.confirm(`${newName} is already added to phonebook, replace the old number with new one?`)) {
        const existId = existPersons[0].id;
        const existPerson = existPersons[0];
        PersonAPI.update(existId, {...existPerson, number: newNumber})
        .then(updatedPerson => {
          setPersons(persons.map(p => p.id !== updatedPerson.id ? p : updatedPerson))
        })
        .catch(error => {
          console.log('update error', error)
          setMessage({message: error, isError: true})
        })
      }
    } else {
      PersonAPI.create({ name: newName, number: newNumber}).then(newPerson => {
        setPersons([...persons, newPerson])
        setMessage({message: `Added ${newName}`, isError: false})
      })
      .catch(error => {
        console.log('create error', error)
        setMessage({message: error, isError: true})
      })
    }

    setNewName('')
    setNewNumber('')
  }

  const onDelete = (id, name) => {
    if (window.confirm(`Delete ${name}?`)) {
      PersonAPI.deletePerson(id).then(data => {
        console.log('deleted', data)
        setPersons(persons.filter(p => p.id !== id))
      }).catch(error => {
        console.log('delete error', error)
        setMessage({message: `Information of ${name} was has already been deleted from server`, isError: true})
      })
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>

      {message.message && <Notification message={message.message} isError={message.isError} />}

      <Filter filter={filter} onChange={handleChangeFilter} />

      <PersonForm
        onSubmit={handleSubmit}
        newName={newName}
        newNumber={newNumber}
        onChangeNewName={handleChangeNewName}
        onChangeNewNumber={handleChangeNewNumber}
      />

      <h2>Numbers</h2>
      <Persons list={persons} filter={filter} onDelete={onDelete}/>
    </div>
  )
}

export default App
