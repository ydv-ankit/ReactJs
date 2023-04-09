import React, { useState } from 'react'

export default function Counter() {
    const [counter, setCounter] = useState(0);
    return (
        <div className='container'>
            <h1>Counter</h1>
            <h2>{counter}</h2>
            <button onClick={()=>setCounter(counter + 1)}>Increase</button>
        </div>
    )
}
