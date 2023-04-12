import { useState, useEffect } from 'react'
import axios from 'axios'

import personService from './services/persons'

// notification component
const Notification = ({ message }) => {
  if (message === null) {
    return null;
  }

  return <div className="notification">{message}</div>;
};

const Error = ({ message }) => {
  if (message === null) {
    return null;
  }

  return <div className="error">{message}</div>;
};


const App = () => {
  const [persons, setPersons] = useState([])
  const [notification, setNotification] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const showError = (message, duration) => {
    setErrorMessage(message);
    setTimeout(() => {
      setErrorMessage(null);
    }, duration);
  };




  // load initial state
  useEffect(() => {
    personService.getAll()
      .then((res) => setPersons(res.data))
  }, [])

  // this controls the state for the form
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const handleNumberChange = (event) => setNewNumber(event.target.value)

  const handleNameChange = (event) => setNewName(event.target.value)
  const handleSubmit = (event) => {
    event.preventDefault();

    const existingPerson = persons.find((person) => person.name === newName);

    if (existingPerson) {
      if (
        window.confirm(
          `${newName} is already in the phonebook, replace the old number with a new one?`
        )
      ) {
        const updatedPerson = { ...existingPerson, number: newNumber };

        // In the success block for updating a phone number
        personService
          .update(existingPerson.id, updatedPerson)
          .then((response) => {
            setPersons(
              persons.map((person) =>
                person.id === existingPerson.id ? response.data : person
              )
            );
            setNewName('');
            setNewNumber('');
            showNotification(`Updated the number for ${newName}`, 5000);
          }).catch((e) => showError(`Failed to update the number for ${newName}: ${e.message}`, 5000))
      }
    } else {
      const newPerson = { name: newName, number: newNumber };
      personService.create(newPerson).then((response) => {
        setPersons(persons.concat(response.data));
        setNewName('');
        setNewNumber('');
        showNotification(`Added ${newName}`, 5000);
      }).catch((e) => showError(`Failed to add ${newName}: ${e.message}`, 5000)
      );
    }
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this contact?')) {
      personService.deleteObject(id)
        .then(() => setPersons(persons.filter(person => person.id !== id)))
        .catch((e) => alert('Error deleting contact'));
    }
  }

  const showNotification = (message, duration) => {
    setNotification(message);
    setTimeout(() => {
      setNotification(null);
    }, duration);
  };






  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={notification} />
      <Error message={errorMessage} />
      <form onSubmit={handleSubmit}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
          <div>number: <input value={newNumber} onChange={handleNumberChange} /></div>
        </div>
        <div>
          <button type="submit"  >add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person, index) => {
        return (
          <div>
            <p key={index}> {person.name} {person.number} </p>
            <button type="submit" onClick={() => handleDelete(person.id)}> Delete </button>
          </div>
        )

      })}
    </div>
  )
}

export default App

