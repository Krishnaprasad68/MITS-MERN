import React,{uSeMemo, useState} from "react";
const UseMemo = () => {
    const [count,setCount]=React.useState(0);
    const [number,setNumber]=React.useState(0);
    const cubeNum =(number)=>{
        console.log("Calculating cube...");
        return Math.pow(number,3);
    }
    const result = useMemo(()=>{
        return cubeNum(number);
    },[number]);
    return (
        
        <div>
            <h1>{count}</h1>
            <button onClick={()=>setCount(count+1)}>count++</button>
            <input type="number" onChange={(e)=>setNumber(e.target.value)}/>
            <p>cube of number is {result}</p>

        </div>
    )
}
export default UseMemo;