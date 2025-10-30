import React from 'react'
// import './index.css'
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
    <div className='maindiv'>
    <form onSubmit={handleSubmit}>
    <div className='formdiv'>

      <label htmlFor="username">UserName</label>
      <input id="username" type="text" placeholder='enter your username'
      name='name'
      value={formdata.name}
      onChange={handlechange}
      />
      <label htmlFor="password">Password</label>
      <input id='password' type="text" placeholder='enter your password'
      name='password'
      value={formdata.password} 
      onChange={handlechange}
      />
      <label htmlFor="age">Age</label>
      <input id='age' type="text" placeholder='enter your age'
      name='age'
      value={formdata.age}
      onChange={handlechange}
      />

      <button type='submit'>Submit</button>
    </div>
    </form>

 
      {showdata && (
        <div className='resultcontainer'> 
          <h5>Request sent to db with below request data</h5>
          <ul>
            <li>Username : {formdata.name}</li>
            <li>Password : {formdata.password}</li>
            <li>Age : {formdata.age}</li>
          </ul>
        </div>
      )}

    </div>


  )
}

export default App