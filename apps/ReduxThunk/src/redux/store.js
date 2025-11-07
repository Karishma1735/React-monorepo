import {configureStore} from '@reduxjs/toolkit'
import thunkreducer from './thunkSlice'

const store = configureStore({
    reducer:{
        thunk:thunkreducer

    }

})

export default store;