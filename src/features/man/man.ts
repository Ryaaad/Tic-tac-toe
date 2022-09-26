import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  Night:false,
};

const manSlice = createSlice({
  name:'man',
  initialState: initialState,
  reducers:{
    Mode:(state)=>{
        state.Night=!state.Night
    }
  }
});

export const {Mode}= manSlice.actions
export default manSlice.reducer;