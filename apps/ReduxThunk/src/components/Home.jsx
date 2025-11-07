import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { fetchdatabyThunk } from '../redux/thunkSlice'

function Home() {
    const dispatch = useDispatch()
   const { data, error, loading } = useSelector((state) => state.thunk);

    const handledata = () =>{
        dispatch(fetchdatabyThunk())
    }


  return (
    <div>
      <button onClick={handledata}>Fetch Data</button>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
     {data.map((user, index) => (
        <div key={index}>
          <p>{user.name}</p>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  )
}

export default Home