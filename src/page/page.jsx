import React from "react";
import "./page.scss";

const Page=({name,photo})=>{
 return(
     <div className="Page">
     <div className="renderPage">
     <h1 className="head">{name}</h1>
     <img src={photo} alt="pho" className="image"></img>
     </div>
     </div>
 );
};
export default Page;
