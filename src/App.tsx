import { useEffect } from "react";
import XO from "./X&O/XO"
import WebFont from 'webfontloader';
import { useDispatch, useSelector } from "react-redux";
import { BsMoonFill,BsFillSunFill } from "react-icons/bs";
import {Mode} from './features/man/man'
function App() {
  // git init git add . git commit -m 'title' -m 'disc' git remote add origin 'repo link'
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
    <div className={`bg-white text-3xl h-[100vh] ${Night && 'bg-black'}`} >
      {Night &&   <BsFillSunFill  className="top-[5%] hover:scale-105 text-white fixed cursor-pointer right-[20%] "
      onClick={()=> dispatch(Mode())} ></BsFillSunFill>}
      {!Night &&   <BsMoonFill className="top-[5%] fixed cursor-pointer right-[20%] hover:scale-105 "
         onClick={()=>dispatch(Mode())} ></BsMoonFill>}
    <XO></XO>
    </div>
  )
}

export default App
