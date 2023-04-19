import { useState, useEffect } from "react";

const url = "https://api.github.com/users";

const UseEffectFetchData = () => {
  // TODO 1: set up 'users, setUsers' state values
    const [users, setUsers] = useState([])
  /**
   * TODO 2: Set up asynchronous function getUsers()
   *
   * await fetch, pass in url, assign to variable res
   * await res.json(), assign to variable data
   * setUsers to data variable
   */
    async function getUsers() {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setUsers(data);
      } catch(error) {
        console.error(error)
      }
    }
  /**
   * TODO 3: Set up useEffect with callback and dependency array.
   * MAKE SURE TO INCLUDE DEPENDENCY ARRAY!!!!!!!
   *
   * Invoke getUsers() in useEffect callback
   */
    useEffect(() => {
      getUsers()
    }, [])

  return (
    // TODO 4: Set up HTML and iterate over users variable
    // Return list item for each user.
    <>
      <ul className='users'>
        {users.map(({ id, login, avatar_url, html_url }) => (
            <li key={id}>
            <img src={avatar_url} alt={login} />
            <div>
              <h3>{login}</h3>
              <a href={html_url} target="_blank" rel="noreferrer">
                Profile
              </a>
            </div>
          </li>
          ))}
      </ul>
    </>
  );
};

export default UseEffectFetchData;
