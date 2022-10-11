import { createSlice,PayloadAction } from '@reduxjs/toolkit';

const initialState = {
    matric:['','','',
             '','','',
             '','','' ],
    Turn:true,
    win:false,
    Draw:false,
    p1:0,
    p2:0
};

const XOSlice = createSlice({
  name:'XO',
  initialState: initialState,
  reducers:{
    setTurn:(state, action: PayloadAction<number>)=>{  
          if(state.matric[action.payload]==='' ) state.Turn=!state.Turn
        },
    setMat:(state, action: PayloadAction<number>)=>{
       if(!state.Turn && state.matric[action.payload]==='' ) state.matric[action.payload]='X'
       if(state.Turn && state.matric[action.payload]==='') state.matric[action.payload]='O'
    },
    setDraw:(state)=>{
        let exist=false
      if(!state.win){
        for(let i=0;i<state.matric.length;i++){
            if(state.matric[i]===''){ exist=true; i=state.matric.length}
        }
    if(!exist) state.Draw=true}
    },
    Restart:(state)=>{
      state.matric=['','','',
      '','','',
      '','','' ]
      state.Draw=false 
    state.Turn=true
    state.win=false
    },
    setwin:(state)=>{

      if( (state.matric[0]===state.matric[4] && state.matric[4]===state.matric[8] && state.matric[8]!=='') 
  || (state.matric[2]===state.matric[4] && state.matric[4]===state.matric[6] && state.matric[6]!==''))
      { state.win=true; state.Turn ? state.p1++  : state.p2++} 
     else
     for(let i=0;i<state.matric.length;i++){
      if((i===0||i===3||i===6)&& state.matric[i]===state.matric[i+1] &&
       state.matric[i+1]===state.matric[i+2]  && state.matric[i+2]!=='' ) 
       { state.win=true;i=state.matric.length }
       if((i===0||i===1||i===2)&& state.matric[i]===state.matric[i+3] &&
       state.matric[i+3]===state.matric[i+6] && state.matric[i+6]!=='' ) 
       { state.win=true;i=state.matric.length } }
    }
  }
});

export const {setTurn,setMat,setDraw,Restart,setwin}= XOSlice.actions
export default XOSlice.reducer;