import { useState } from "react"

function Counter (){
    const [Counter, setCounter] = useState(0)

    function Increment(){ 
        if(Counter < 10) {
            setCounter((prevvalue=> prevvalue +1))
        }
        
    }

    function Decrement(){
        if(Counter>0){
            setCounter((prevvalue => prevvalue-1))
            
        }
        
    }

    function Reset(){
        setCounter(0)
    }
    return (
       <div>
           <h1>Counter {Counter}</h1>
           <button onClick={Increment}>+</button>
           <button onClick={Decrement}>-</button><br/>
           <button onClick={Reset}>Reset</button>
       </div>
    )
}

export default Counter