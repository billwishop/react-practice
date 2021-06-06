import React, { useState } from 'react'

export default function CounterHooks(props) {
    const [count, setCount] = useState(props.initialCount)
    return (
        <div>
            <button onClick={() => setCount(prevState => prevState - 1)}>-</button>
            <span>{count}</span>
            <button onClick={() => setCount(prevState => prevState + 1)}>+</button>
        </div>
    )
}