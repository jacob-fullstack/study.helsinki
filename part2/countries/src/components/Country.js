import { useState } from "react"
import axios from "axios"

const API_KEY = process.env.REACT_APP_API_KEY

const Country = ({id, data }) => {
  const [expand, setExpand] = useState(false)
  const [weather, setWeather] = useState(null)
  
  const handleClick = () => {
    const newExpand = !expand;
    setExpand(newExpand)

    if (newExpand) {
      axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${data.capital[0]}&appid=${API_KEY}`)
      .then(response => response.weather[0])
      .then(data => {
        setWeather(data)
      })
      .catch(error => {
        setWeather(null)
      })
    }
  }

  return (
    expand ? (
    <div>
      <h2>{data.name.common}</h2>
      <p>capital {data.capital[0]}</p>
      <p>area {data.area}</p>

      <ul>
        <b>languages:</b>
        {Object.keys(data.languages).map((key) => (
          <li key={key}>{data.languages[key]}</li>
        ))}
      </ul>
      <img src={data.flags.svg} width="200px" />

      {weather && (<>
        <h2>Weather in {data.capital[0]}</h2>
        <p>temperature {}</p>
        </>)}

      <button onClick={handleClick}>hide</button>
    </div>) : (
      <>
        <p>{data.name.common}  <button onClick={handleClick}>show</button></p>
      </>
    )
  )
}

export default Country
