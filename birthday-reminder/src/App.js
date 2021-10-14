import './App.css'
import { useState } from 'react'
import birthdayPersons from './data/birthdayPersons.json'

const App = () => <ReminderContainer />

const ReminderContainer = () => {
  const [persons, setPersons] = useState(birthdayPersons)
  return (
    <div className='reminderContainer'>
      <h1>{persons.length} birthday(s) today</h1>
      {persons.map((person) => {
        return <ReminderCard key={person.id} person={person} />
      })}
      <button className='btn' onClick={() => setPersons([])}>
        CLEAR ALL
      </button>
    </div>
  )
}

const ReminderCard = (props) => {
  const { personAge, personName, imageLink } = props.person
  return (
    <div className='reminderCard'>
      <img className='reminderCardPhoto' src={imageLink} alt={personName} />
      <div className='reminderCardText'>
        <h3>{personName}</h3>
        <h5>{personAge} years</h5>
      </div>
    </div>
  )
}

export default App
