import React from 'react'

function First(props) {
    let {setCount , count} = props.data;
    console.log(1+2+3+"harry"+3+2+3);
    const complexCounter = () => {
      setTimeout(()=>{
        setCount((prev)=>{
          return prev + 1
        })
      } , 2000)
    }

  return (
    <>
    <button onClick={()=> setCount(count - 1)}>-</button>
    <button onClick={()=> setCount(0)}>-</button>
    <button onClick={()=> setCount(count + 1)}>+</button>
     <div>Hello{props.array}</div> 
     <button onClick={()=> complexCounter}>+</button>
    </>
  )
}

export  {First}
