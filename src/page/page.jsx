import React from "react";
import "./page.scss";

const Page=({name,photo})=>{
 return(
     <div className="Page">
     
     <h2 className="head">{name}</h2>
     <img src={photo} alt="pho" className="image"></img>
     
     </div>
 );
};
export default Page;
