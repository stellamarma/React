import {useState} from 'react'

const StatePlayground = () => {
   
    let [count,setCount] =useState(0);
    

    const addOne=()=>{
        setCount(prevCount => prevCount + 1);
    }

    const decreaseOne=()=>{
        setCount(prevCount => prevCount - 1);
    }

    console.log(count)
    return(
        <>
            <h3>Count : {count}</h3>
            <button onClick={addOne}>Add one</button>
            <button onClick={decreaseOne}>Rest one</button>
        </>
    )
}
export default StatePlayground ;