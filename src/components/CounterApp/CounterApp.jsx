import { useState } from 'react';
import './CounterApp.css';
const CounterApp = () => {
    const [count, setCount] = useState(0);
    return (
        <>
            <h1>CounterApp</h1>
            <p>Count: {count}</p>
            <div className='counterButton'>
                <button
                    className='increment'
                    onClick={() => setCount((count) => count + 1)}
                >
                    Increment
                </button>
                <button
                    className='decrement'
                    onClick={() => setCount((count) => count + 1)}
                >
                    Decrement
                </button>
            </div>
        </>
    );
};

export default CounterApp;
