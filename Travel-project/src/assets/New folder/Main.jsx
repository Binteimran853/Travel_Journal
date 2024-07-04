import React from "react"
export default function Main(props){
    return (
      <div className="Main-content">
           <div className="images">
                 <img src={props.img1} width="135px" height="180px"  />
           </div>
      <div className="details">
                 <div className="Location">
                    <img src={props.img2} />
                   <span>{props.name}</span>
                   <a href="www.google.com">View on Google Maps</a>
                 </div>
                 <div className="remain">
                     <h1>{props.name2}</h1>
                     <span>{props.date}</span>
    
                     <p>{props.description}</p>
                </div>
           </div>
      </div>
    )
}