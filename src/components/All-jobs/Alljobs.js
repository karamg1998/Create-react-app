import "./alljobs.css";
import Navbar from "../navbar/Navbar";
//import React, { useState } from "react";
//import axios from "axios";

function AllJobs() {
/* const [name,setName]=useState('')
 
  React.useEffect((e)=>{
    setName('new')
  },[])
 */
  return (
    <div className="job-container">
      <Navbar></Navbar>
      <h1>this is alljobs container</h1>
    </div>
  );
}

export default AllJobs;
