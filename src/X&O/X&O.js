import { motion , AnimatePresence, useAnimation } from "framer-motion"
import { useState , useEffect  } from 'react';

const XO = () => {
    const [state, setstate] = useState(false);
    const [draw, setdraw] = useState(0);
    const [Mat, setMat] = useState({
      a:"", b:"", c:"",
      d:"", e:"", f:"",
      g:"", h:"", i:"",
    });
    const [win,setwin]=useState(false)
   
    const handelClick=(e)=>{
   console.log(win)
     if(state){
      const index=e.target.id;
       setMat(prev=>({...prev,[index]:"X"}));
       e.target.id='F';
     }else{
      const index=e.target.id;
      setMat(prev=>({...prev,[index]:"O"}));
      e.target.id='F';
     }
     setdraw(prev=>prev+1);
     console.log(draw);
     setstate(prev=>!prev);
    }
    useEffect(() => {
      console.log("check")
  if((Mat.a===Mat.b && Mat.c===Mat.b && Mat.a!=="" ) || (Mat.a===Mat.d && Mat.g===Mat.d && Mat.a!=="") 
  || (Mat.a===Mat.e && Mat.e===Mat.i && Mat.a!=="" ) || (Mat.b===Mat.e && Mat.e===Mat.h && Mat.h!=="" ) || 
  (Mat.c===Mat.f && Mat.f===Mat.i && Mat.f!=="" ) || (Mat.c===Mat.e && Mat.g===Mat.e && Mat.g!=="") ||
  (Mat.d===Mat.e && Mat.f===Mat.d && Mat.e!=="" ) || (Mat.g===Mat.h && Mat.i===Mat.h && Mat.g!=="" ) ) 
      { setwin((prev)=>prev =true);}
     }, [Mat]); 
    
    const Restart=()=>{
      var a={
        a:"", b:"", c:"",
        d:"", e:"", f:"",
        g:"", h:"", i:"",
      }
      setMat({...a});
      console.log(Mat);
      setstate(false);
      setdraw(0);
      setwin(false);
    }



    return ( 
       <div className='grid justify-center' >
       <h1 className="text-4xl font-bold mt-10 text-center "> X / O  </h1>
       <button onClick={()=>Restart()} > New Game </button>
   {  !win && <div>
    {draw!==9 && <div className="grid grid-cols-3 mx-auto mt-10 grid-rows-3 gap-[10px] justify-center bg-black h-[50vh] w-[50vw] ">
        <div id='a' className="bg-white text-7xl text-center font-bold grid items-center cursor-pointer"  
            onClick={(e)=>{
             if (e.target.id !=='F') handelClick(e);
            }}  > {Mat.a}  </div>
        <div id='b' className="bg-white text-7xl text-center font-bold grid items-center cursor-pointer" 
             onClick={(e)=>{
            if (e.target.id !=='F') handelClick(e);
            }} > {Mat.b}</div>
        <div id='c'  className="bg-white text-7xl text-center font-bold grid items-center cursor-pointer" 
             onClick={(e)=>{
          if (e.target.id !=='F') handelClick(e);
            }} >{Mat.c}</div>
        <div id='d' className="bg-white text-7xl text-center font-bold grid items-center cursor-pointer" 
             onClick={(e)=>{
          if (e.target.id !=='F') handelClick(e);
            }} >{Mat.d}</div>
        <div id='e' className="bg-white text-7xl text-center font-bold grid items-center cursor-pointer" 
             onClick={(e)=>{
          if (e.target.id !=='F') handelClick(e);
            }} >{Mat.e}</div>
        <div id='f' className="bg-white text-7xl text-center font-bold grid items-center cursor-pointer"  
            onClick={(e)=>{
          if (e.target.id !=='F') handelClick(e);
            }} >{Mat.f}</div>
        <div id='g' className="bg-white text-7xl text-center font-bold grid items-center cursor-pointer"  
            onClick={(e)=>{
          if (e.target.id !=='F') handelClick(e);
            }} >{Mat.g}</div>
        <div id='h' className="bg-white text-7xl text-center font-bold grid items-center cursor-pointer" 
             onClick={(e)=>{
          if (e.target.id !=='F') handelClick(e);
            }} >{Mat.h}</div>
        <div id='i' className="bg-white text-7xl text-center font-bold grid items-center cursor-pointer"  onClick={(e)=>{
          if (e.target.id !=='F') handelClick(e);
            } } >{Mat.i}</div>
        </div>}
      </div>}
     
       {!win && <div> { draw===9 &&
          <motion.div className=' grid justify-center items-center mt-5 text-white w-[450px] 
          h-[150px] rounded-md bg-black  '
          initial={{opacity:0, y:100  }}
          animate={{opacity:1, y:0, transition:{ bounce:0.6,
            type:"spring"}  }}
          > 
          <h1 className="text-2xl font-bold" > Draw </h1>
          <button onClick={()=>Restart()} className='bg-white p-2 rounded-sm text-black'  >Play Again</button>
        </motion.div> } </div>}


        {win &&  
          <motion.div className=' grid justify-center items-center mt-5 text-white w-[450px] 
          h-[150px] rounded-md bg-black  '
          initial={{opacity:0, y:100  }}
          animate={{opacity:1, y:0, transition:{ bounce:0.6,
            type:"spring"}  }}
          > 
          <h1 className="text-2xl font-bold" > Player {state?0:1} Won</h1>
          <button onClick={()=>Restart()} className='bg-white rounded-sm text-black'  >Play Again</button>
        </motion.div>
        }
       </div>
       
     );
}
 
export default XO;