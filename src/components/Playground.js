/*
💥💥💥 Rules of STATE 💥💥💥
  - We create a slice of state like this: `const [healthPoints, setHealthPoints] = useState(100)`
  - A component may have as may slices of state as it needs
  - A slice of state may contain a string, a number, a boolean, an array, an object...
  - We use slices of state to store information that changes as the user interacts with the app
  - State is used in the JSX interpolated inside curly brackets
  - We never tamper with state: `healthPoints++`, `healthPoints--` or `someState.push(item)` is FORBIDDEN
  - We use the dedicated "state updater" to schedule a state change: `setHealthPoints(healthPoints + 1)`
*/
import React, { useState } from 'react'

function Playground(props) {
  const [count, setCount,] = useState(0)
  const [spinnerOn, setSpinnerOn] = useState(false)
  const [weapon, setWeapon] = useState('scissors')

  if (spinnerOn) {
    return (
      <div className="container" >
        <h3>The spinner is {spinnerOn ? "ON" : "OFF"}  </h3>
        <button onClick={() => setSpinnerOn(!spinnerOn)}>Toggle</button>
      </div>
    )
  }

  return (
    <div className='container'>
      <div className='container'>
        <p>{count}</p>
        <button onClick={() => setCount(count + 1)}>Addone</button>
        <button onClick={() => setCount(count - 1)}>Takeone</button>
        <button onClick={() => setCount(count * 2)}>Multiplier</button>
        <button onClick={() => setCount(0)}>Reset Count</button>
      </div>
      <div className='container'>
        <h3>The spinner is {spinnerOn ? "ON" : "OFF"}  </h3>
        <button onClick={() => setSpinnerOn(!spinnerOn)}>Toggle</button>
      </div>
      <div className='container'>
        <h3>The current weapon is {weapon} </h3>
        <button onClick={() => setWeapon('scissors')}>Pick scissors</button>
        <button onClick={() => setWeapon('rock')}>Pick rock</button>
        <button onClick={() => setWeapon('paper')}>Pick paper</button>
      </div>
    </div >

  )
}

export default Playground