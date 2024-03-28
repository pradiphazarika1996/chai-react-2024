import React, {useState} from 'react'

const App = () => {
  const [counter, setCounter] = useState(0);
  const increase =()=>{
    setCounter(counter => counter+1)
  }

  const decrease =()=>{
   if(counter >0){
    setCounter(counter => counter-1)
   }
  }
  const reset =()=>{
    setCounter(0)
  }
  
 

  return (
    <div>
      <h2>Counter {counter} </h2>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default App;
