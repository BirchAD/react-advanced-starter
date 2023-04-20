import React, { useState, useEffect } from "react";

const url = "https://api.github.com/users/QuincyLarson";

const FetchingData = () => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch(url);
        if(!res.ok) {
          setIsLoading(false)
          setIsError(true)
        }
        const obj = await res.json();
        setUser(obj)
      } catch (error) {
        setIsError(true);
        console.log(error)
      }
      setIsLoading(false)
    };
    fetchUser();
  }, [])

  if (isLoading) {
    return <h2>Loading...</h2>
  }
  
  if (isError) {
    return <h2>Error!</h2>
  }

  return (
    <div>
      <img
        style={{ width: "150px", borderRadius: "25px" }}
        src={user.avatar_url}
        alt={user.name}
      />
      <h2>{user.name}</h2>
      <h3>Works at {user.company}</h3>
      <p>{user.bio}</p>
    </div>
  )
};

export default FetchingData;
