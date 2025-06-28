import {useState} from 'react'

const StatePlayground = () => {
   let initialCount = 0;
    let [count,setCount] =useState(initialCount);
    

    const addOne=()=>{
        setCount(prevCount => prevCount + 1);
    }

    const decreaseOne=()=>{
        setCount(prevCount => prevCount - 1);
    }

    const resetCount = () =>{
        setCount(initialCount);
    }
    console.log(count)
    return(
        <>
            <h3>Count : {count}</h3>
            <button onClick={addOne}>Add one</button>
            <button onClick={decreaseOne}>Rest one</button>
            <button onClick={resetCount}>Reset</button>
        </>
    )
}
export default StatePlayground ;