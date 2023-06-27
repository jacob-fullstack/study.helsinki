import { useEffect, useState } from 'react'
import axios from 'axios'
import Country from './components/Country'
const App = () => {
  const [filter, setFilter] = useState('')
  const [countries, setCountries] = useState([])
  const [result, setResult] = useState([])

  useEffect(() => {
    axios.get('https://studies.cs.helsinki.fi/restcountries/api/all').then(
      response => response.data
    ).then(
      allCountries => {
        setCountries(allCountries);
      }
    )
  }, [])

  const handleChange = (e) => {
    const newFilter = e.target.value
    setFilter(newFilter)

    const filtered = countries.filter(c => c.name.common.toLowerCase().indexOf(newFilter) >= 0)

    if (filtered.length > 10) {
      setResult(null)
    } else {
      setResult(filtered)
    }
  }

  return (
    <div>
      find countries <input onChange={handleChange} />

      {result && result.length >= 1 &&
        result.map((c, i) => (
          <Country key={i} data={c} />
        ))
      }
    </div>
  )
}

export default App
