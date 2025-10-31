// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import Counter from './components/Usereducer'
// import axios from "axios";


// function App() {
//   const [count, setCount] = useState(0)

//   return (

//    <Counter/>

//   )
// }

// export default App

// https://jsonplaceholder.typicode.com/users


import { useState, useEffect } from "react";
import axios from "axios";
import { usFetch } from "./components/customhook";

function App() {
  // const [users, setUsers] = useState([]); 

  // const fetchUsers = async () => {
  //   try {
  //     const response = await axios.get(
  //       "https://jsonplaceholder.typicode.com/users"
  //     );
  //     console.log(response.data); 
  //     setUsers(response.data); 
  //   } catch (error) {
  //     console.log("Error fetching data:", error);
  //   }
  // };

  // useEffect(() => {
  //   fetchUsers();
  // }, []); 


  const {data:users , error} = usFetch( "https://jsonplaceholder.typicode.com/users")



  const fetchposts = async () =>{
    try {
      const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
      console.log(response.data[0])
    } catch (error) {
      console.log("error fetching apis");
    }
    
  }

  useEffect(()=>{
    fetchposts()
  },[])


  return (
    <div>
      <h1>Users List</h1>
      <ul>
        {users.map((user) => (
          <li>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;

