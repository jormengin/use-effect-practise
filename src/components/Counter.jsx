import React, { useState, useEffect } from 'react'

export default function Counter() {

  const [count, setCount] = useState(0);
  const [dynamicClass, setDynamicClass] = useState('text');
  const [color, setColor] = useState('')

  useEffect(()=>{
    let randomNum = Math.floor(Math.random()*10)
    setCount(randomNum)
    return ()=>{
      setCount(0)
      setDynamicClass('text')
      console.log('All clean here. Count:', count, 'Class:', dynamicClass);
    }
  },[])

  useEffect(()=>{
    if(count<=0){
      setColor('red')
    } else if(count<= 5){
      setColor('orange')
    } else {
      setColor('green')
    }
    
  },[count, dynamicClass])

const handleIncrease =()=>{
  setCount(prev=>prev+1)
}
const handleDecrease =()=>{
  setCount(prev=>prev-1)
}
  // Second and Fourth iteration

  // Third iteration

  return (
    <div>
      <p className={color}>Counter: <span className={dynamicClass}>{count}</span></p>
      <button onClick={handleIncrease}>+ Increase</button>
      <button onClick={handleDecrease }>- Decrease</button>
    </div>
  )
}
