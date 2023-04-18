import { useState } from "react";

const UseStateBasics = () => {
  const [count, setCount] = useState(0)
  
  function handleClick() {
    setCount(count + 1)
  }
  return (
    <>
      <h2>You clicked {count} times </h2>
      <button onClick={handleClick}>Click</button>
    </>
  )
};

export default UseStateBasics;
