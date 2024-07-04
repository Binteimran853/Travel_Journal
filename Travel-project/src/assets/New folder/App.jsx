import React from "react"
import Navbar from "./Navbar"
import Main from "./Main"
import data from "./data"
export default function App(){
    const MainData=data.map((item)=>{ return (
                               <Main key={item.id} 
                                img1={item.img1} 
                                img2={item.img2}
                                name={item.name} 
                                name2={item.name2}
                                date={item.date} 
                               description={item.description}/>)})
    return(
      <> 
        <Navbar/>
        {MainData}
      </>
    )
     }