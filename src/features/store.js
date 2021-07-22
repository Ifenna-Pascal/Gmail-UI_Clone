import {configureStore} from "@reduxjs/toolkit";
import toggleRedcer from  "./counterSlice"; 

const store = configureStore({
     reducer:{
         toggle:toggleRedcer
     }
})

export default store;