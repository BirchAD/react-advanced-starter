import data from '../../../data'
import { useState } from 'react' 

const UseStateArray = () => {
  const [people, setPeople] = useState(data)

  const removePerson = (id) => {
    setPeople(people.filter(person => person.id !== id))
  };

  const clearPeople = () => {
    setPeople([]);
  };
  
  return (
    <>
      <h2>useState array example</h2>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id}>
            <h4>{name}</h4>
            <button className="btn" onClick={() => removePerson(id)}>
              Remove Me
            </button>
          </div>
        );
      })}

      <div>
        <button onClick={clearPeople}>Clear List</button>
      </div>
    </>
  );
};

export default UseStateArray;
