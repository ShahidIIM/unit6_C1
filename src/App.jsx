import Slide from "./Components/Slide";
import "./App.css";
import React from "react";
import { useState,useEffect } from "react";

// once you download the template; please run  "npm install" command and that will install all the packages required for this project by referencing package.json;

// do not remove any of the data-cy attributes;

// API to get the data :

//  https://slides-app-220822.herokuapp.com/slides






export default function App() {
 const [x,sex]=useState(0)
   const[data,setdata]= useState([])
   const[da,st]= useState(false)
   
   

   useEffect(()=>{
    fetch(" https://slides-app-220822.herokuapp.com/slides").then((s)=>s.json()).then((data)=>{setdata(data)
  
  st(true)})


   },[])
  
  console.log(data)



  return (
    <div className="App">
      <h1 data-cy="header">Slides</h1>
{


da?<Slide  item={data[x]} />:""

}
      
      <button data-cy="prev" onClick={()=>{
      sex(x-1)
      }
      }>Prev</button>
      <button data-cy="next" onClick={()=>
  
  data.length-1>x? sex(x+1):""
      }
      >Next</button>
    </div>
  );
}