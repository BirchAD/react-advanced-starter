import { useState } from 'react';

let count = 0

const ErrorExample = () => {
  
  const [count, setCount] = useState(0);

   function handleClick() {
    setCount(count + 1)
   } 

    return (
      <>
        <h2>useState error example</h2>
        <h2>{count}</h2>
        <button onClick={handleClick}>Click</button>
      </>
    );
  };
  
  export default ErrorExample;