import Case from './Case';
import {setDraw,Restart,setwin } from '../features/XO/XOSlice';
import {useDispatch,useSelector} from 'react-redux'
import { useEffect } from 'react';
import stupid from '../asset/stupid.png'
const XO=()=>{
    const dispatch=useDispatch()

const  {matric,p1,p2,Turn,win,Draw}= useSelector((state:any)=>state.XO)
 const Night = useSelector((state:any)=>state.man.Night)

 useEffect(()=>{
    setTimeout(() => {
        dispatch(setwin())
        dispatch(setDraw()) ;  
    }, 100);  
 },[Turn])
 
 let index:number[]=[0,1,2,3,4,5,6,7,8];
 console.log(p1);
 
return (
    <div style={{background:`${Night ? 'black' : ''}`}}  className="h-[calc(100vh)]
     grid justify-center items-center " >
     <div className={ `${Night ? 'text-white' : 'text-black'} flex h-[max-content] justify-between font-demibold text-2xl` }>
      <h1> O : {p1}  </h1>
      <h1> X : {p2}  </h1> 
     </div>
     { Draw &&    <div className="h-[100vh] fixed top-0 right-0 opacity-100 
      w-full bg-[#00000099] z-20 "  >
         <div  className=' absolute top-[50%] shadow-2xl left-[50%] translate-x-[-50%]
          translate-y-[-50%]  w-[500px] h-[210px] grid items-center p-3 font-["Roboto"]
           justify-center text-lg text-center rounded-[25px] z-30  bg-white ' >
    <div  >
      <img src={stupid} className="h-[35px] w-[35px] top-[7%] left-[60%] absolute" />
    <h1 className='tracking-[1px] font-bold  text-3xl' >Draw</h1> 
        <p  className=' my-2 text-[#9e9ea7] max-w-[350px] ' >None of you 
        two were smart enough to win What's the matter you're equally dumb is that it ?</p> 
    </div>
    <div className="flex gap-10 justify-center items-center">
        <div className='bg-black p-2 cursor-pointer box-border px-5 text-white 
        rounded-lg ' onClick={()=>dispatch(Restart())} > Restart</div>
        <div className='text-[#9e9ea7] cursor-pointer hover:text-[#898991] '
         onClick={()=>dispatch(Restart())}
        >Fuck off</div>
    </div>
    </div>
     </div>
     }
        { win &&  <div className="h-[100vh] fixed top-0 right-0 opacity-100 
      w-full bg-[#00000099] z-20 "  >
         <div  className=' absolute top-[50%] shadow-2xl left-[50%] translate-x-[-50%]
          translate-y-[-50%]  w-[500px] h-[210px] grid items-center p-3 font-["Roboto"]
           justify-center text-lg text-center rounded-[25px] z-30  bg-white ' >
    <div  >
      {/* <img src={stupid} className="h-[35px] w-[35px] top-[10%] left-[60%] absolute" /> */}
    <h1 className='tracking-[1px] font-bold  text-3xl' > You WON</h1> 
        <p  className='my-2 text-[#9e9ea7] max-w-[350px] ' >This doesnt change the fact of you being a loser </p> 
    </div>
    <div className="flex gap-10 justify-center items-center">
        <div className='bg-[#000000eb] p-2 cursor-pointer box-border px-5 text-white 
        rounded-lg hover:bg-black' onClick={()=>dispatch(Restart())} > Restart</div>
        <div className='text-[#9e9ea7] cursor-pointer hover:text-[#898991] '
         onClick={()=>dispatch(Restart())}
        >Fuck off</div>
    </div>
    </div>
     </div>
     }

    <div   className="grid grid-cols-3 grid-rows-3 gap-1 h-[400px] w-[400px] " >
 
     { index.map(i=>
       <Case Night={Night} Turn={Turn} i={i} key={i}></Case>
   ) }
    </div>
    </div>
)
}
export default XO