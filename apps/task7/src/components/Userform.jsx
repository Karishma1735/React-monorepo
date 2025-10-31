import React from "react"
import { useReducer } from "react"


const initialstate = [{
    name:"",
    age:"",
    password:"",
}]
const formreducer = (state,action) =>{
    switch(action.type){
        case 'UPDATE_FIELD':
            return{
              ...state,
              [action.payload.fieldname]:action.payload.value
            }

            case 'RESET FORM':
                return initialstate

            default:
            return state       
    }

}

const Myform = () =>{
    const [formstate , dispatch] =useReducer(formreducer,initialstate)

    const handlechange = (e) =>{
        dispatch({
            type:'UPDATE_FIELD',
            payload : {
                fieldname:e.target.name,
                value : e.target.value
            }
        })
    }

    const handlesubmit = (e)=>{
        e.preventDefault();
        console.log("form submitted");
        
         dispatch({ type: 'RESET_FORM' });
    }
}


return(
    <form></form>
)