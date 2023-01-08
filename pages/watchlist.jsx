import React, { useEffect, useState } from 'react'

const Watchlist = () => {
const [movies,setMovies] = useState([])
const [state,setState] = useState(true)

useEffect(()=>{
    fetch(`http://localhost:8080/watchlist`)
    .then((res)=>res.json())
    .then((res)=>setMovies(res))
    .catch((err)=>console.log(err))
},[state])

const deleteFun = async (id) => {
   await fetch(`http://localhost:8080/watchlist/${id}`,{
    method : "DELETE"
   })
   setState(!state)
}

  return (
    
   <table style={{width:"60%",margin:"auto",marginTop:"40px",textAlign:"center",fontSize:"23px",border:"1px solid white"}}>
    <thead>
        <tr >
        <th style={{border:"1px solid white"}}>Title</th>
        <th style={{border:"1px solid white"}}>Runtime</th>
        <th style={{border:"1px solid white"}}>Release Date</th>
        <th style={{border:"1px solid white"}}>Language</th>
        <th style={{border:"1px solid white"}}>Delete</th>
        </tr>
    </thead>
    <tbody>
        {movies?.map((item)=>{
            return (
                <tr  key={item.id}>
                    <td style={{border:"1px solid white"}}>{item.title}</td>
                    <td style={{border:"1px solid white"}}>{item.runtime}</td>
                    <td style={{border:"1px solid white"}}>{item.release}</td>
                    <td style={{border:"1px solid white"}}>{item.language}</td>
                    <td style={{border:"1px solid white"}}><button onClick={()=>deleteFun(item.id)}>Delete</button></td>
                </tr>
            )
        })}
    </tbody>
   </table>
    
  )
}


export default Watchlist;


 