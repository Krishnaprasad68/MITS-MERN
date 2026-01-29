import React, {useCallback, useState} from 'react'
import Header from '../component/Header'

const UseCallback = () => {
    const [count,setCount]= useState(0);
    const NewFun=useCallback(()=>{
    },[count])
  return(
    <div>
        <Header newFun = {NewFun} />
        <h1>{count}</h1>
        <button onClick={()=>setCount(count+1)}>count++</button>
    </div>
  )
}

export default UseCallback