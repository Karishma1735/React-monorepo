import { createSlice } from "@reduxjs/toolkit"
import axios from 'axios'

export const fetchdatabyThunk = () =>{
    return async(dispatch,getstate) => {
        try {
            dispatch(setLoading(true))
            console.log("loading data");
            
            const response = await axios.get('https://jsonplaceholder.typicode.com/users')
            dispatch(setData(response.data))
            console.log("data loaded");
            
            console.log(response.data);
            
            
        } catch (error) {
            dispatch(setError(true))
                  console.error("Error:", error);
            
        }finally{
            dispatch(setLoading(false))
        }

    }
}


export const thunkslice = createSlice({
     name:'thunk',
        initialState:{
            loading:false,
            error:null,
            data:[],

        },
    reducers:{
        setLoading:(state,action) => {
            state.loading=action.payload
        },

        setError:(state,action) => {
            state.error = action.payload
          
        },
        setData:(state,action) =>{
            state.data = action.payload
        }
       
    }

})

export const {setData ,setError , setLoading} = thunkslice.actions
export default thunkslice.reducer