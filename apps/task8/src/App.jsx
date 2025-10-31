import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Child from './components/Child'

function App() {
  console.log("parent rendered");
  
  const [count, setCount] = useState(0)
  const [name , setname] = useState("")
  const handlecount = ()=>{
    setCount(count=>count+1)
  }

  const handlechange = (e)=>{
    setname(e.target.value)
  }

  return (
    <div style={{display:'flex', flexDirection:'column',gap:'10px'}}>
     <p>{count}</p>
    <button onClick={handlecount}>increase</button>

    <input type="text" value={name} onChange={handlechange} name='name' />


    <Child name={name}/>
 
    </div>
  )
}

export default App
