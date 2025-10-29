import React from 'react'
import './index.css'
import { useState } from 'react'

function App() {
  const [formdata, setformdata] = useState({
    name:"",
    password:"",
    age:"",
  })
  const [showdata,setshowdata] = useState(false)


  const handlechange = (e)=>{
    setformdata({
      ...formdata,
      [e.target.name]:e.target.value

    })
  }

  const handleSubmit = (e)=>{
    console.log(formdata);
    e.preventDefault();
    setshowdata(true)

  }
  return (
    <div>
    <form onSubmit={handleSubmit}>
    <div className='formdiv'>

      <label htmlFor="">UserName</label>
      <input type="text" placeholder='enter your username'
      name='name'
      value={formdata.name}
      onChange={handlechange}
      />
      <label htmlFor="">Password</label>
      <input type="text" placeholder='enter your password'
      name='password'
      value={formdata.password} 
      onChange={handlechange}
      />
      <label htmlFor="">Age</label>
      <input type="text" placeholder='enter your age'
      name='age'
      value={formdata.age}
      onChange={handlechange}
      />

      <button type='submit'>Submit</button>
    </div>
    </form>

  
    {showdata && (<div>

      <h5>Request sent to db with below request data</h5>
      <p>Username :{formdata.name}</p>
      <p>Password : {formdata.password}</p>
      <p>Age : {formdata.age}</p>



      
    </div>)}

    </div>


  )
}

export default App