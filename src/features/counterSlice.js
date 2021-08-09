import {createSlice } from '@reduxjs/toolkit';
const initialState = {
  toggle:false,
  data : [],
};
export const counterSlice = createSlice({
  name: 'toggle',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setOpen: (state) => {
      state.toggle = true;
    },
    setClose: (state) => {
      state.toggle = false;
    },
    getInfo : (state, action)=> {
      state.data = [...state.data, action.payload];   
    },
    getInfoById:(state,action)=>{
      const id = action.payload;
      console.log(id);
      const data = state.data.filter((ele)=>
      // console.log(ele),
        ele.id === id
      );
      console.log(data);
    
    }
    
  },
  
});

export const { setClose, setOpen, getInfo, getInfoById } = counterSlice.actions;
export const  toggleReducer = counterSlice.reducer;
 

export default counterSlice.reducer;
