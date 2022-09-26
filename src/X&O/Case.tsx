import {setTurn,setMat} from '../features/XO/XOSlice';
import {useDispatch,useSelector} from 'react-redux'
// import { useEffect } from 'react';
// type Value="X" | "O" | ""

interface props{
i:number,
Turn:boolean,
Night:boolean,
}
const Case:React.FC<props>=(props)=>{
const dispatch=useDispatch()
const  {matric,Turn,win}= useSelector((state:any)=>state.XO)
  
return (
    <div style={{background:`${props.Night ? 'white' : 'black'}   ` ,
    color:`${props.Night ? 'black' : 'white'}`} }
     className="text-5xl font-bold leading-[5rem] cursor-pointer text-center" 
     onClick={()=>{dispatch(setTurn(props.i)),dispatch(setMat(props.i))}} 
     >  
{matric[props.i]}
    </div>
);
}
export default Case;