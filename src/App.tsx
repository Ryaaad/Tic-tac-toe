import { useEffect } from "react";
import XO from "./X&O/XO"
import WebFont from 'webfontloader';
import { useDispatch, useSelector } from "react-redux";
import { BsMoonFill,BsFillSunFill } from "react-icons/bs";
import {Mode} from './features/man/man'
function App() {

  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Roboto', 'sans serif']
      }
    });
   }, []);
  const dispatch=useDispatch()
const {Night}=useSelector((state:any)=>state.man)
  return (
    <div className={`bg-white text-3xl ${Night && 'bg-black'}`} >
      {Night &&   <BsFillSunFill  className="top-[5%] text-white fixed right-[20%] "
      onClick={()=> dispatch(Mode())} ></BsFillSunFill>}
      {!Night &&   <BsMoonFill className="top-[5%] fixed right-[20%] "
         onClick={()=>dispatch(Mode())} ></BsMoonFill>}
    <XO></XO>
    </div>
  )
}

export default App
