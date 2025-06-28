import {useState} from 'react'

const StatePlayground = () => {
   let initialCount = 0;
    let [state,setState] =useState({
        count:initialCount ,
        user:"Stella"
});
    
    const new1 = ()=>{
        setState(prevState=>{
            return{
                count: prevState.count +1,
                user: "Maria"
            }
        }
        )
    }
    // const addOne=()=>{
    //     setCount(prevCount => prevCount + 1);
    // }

    // const decreaseOne=()=>{
    //     setCount(prevCount => prevCount - 1);
    // }

    // const resetCount = () =>{
    //     setCount(initialCount);
    // }
  
    return(
        <>
        <h1>{state.user}</h1>
            <h3>Count : {state.count}</h3>
            <button onClick={new1}>Add one</button>
            {/* <button onClick={decreaseOne}>Rest one</button>
            <button onClick={resetCount}>Reset</button> */}
        </>
    )
}
export default StatePlayground ;