import React from 'react'
import { useState , useEffect } from 'react'
import axios from "axios";

export default function User() {
    const [data, setData] = useState(null);

   useEffect(() => {
        getData();  
   }, []);

   const getData = async () =>{
    fetch(`http://localhost:5000/users`)
    .then((d)=>d.json())
    .then((data)=>{
        setData(data)
        console.log(data)
    })
   }

  return (
    <div>
      
    <ul>
        {/* {data.map((el)=>{
           <div> {el.firstName} </div>
        })} */}
    </ul>

    </div>
  )
}
