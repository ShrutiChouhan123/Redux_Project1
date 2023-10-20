import React, { useEffect, useState } from 'react';
import axios from 'axios';



function ShowUsers() {
    const [showusers,setshowusers]=useState()
    useEffect(()=>{
    axios.get("http://localhost:3004/users").then(res=>setshowusers(res.data)).catch(err=>console.log(err))
    },[])
    // if (!showusers) return null;
  return (
    <div>
   <table  class="table" style={{width:"50%",height:"200px",marginLeft:"300px",marginTop:"40px"}}> 
    <thead class="table-dark">
        <tr>
            <th>Id</th>
            <th>Username</th>
            <th>Name</th>
            <th>Email</th>
            <th>MObile</th>
        </tr>
    </thead>
    <tbody>
    {showusers && showusers.map((item)=>{
        return (
            <>
            <tr>
                <td>{item.id}</td>
                <td>{item.username}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.mobile}</td>


            </tr>
            </>
        )
    })}
    </tbody>
    
   </table>


    </div>
  )
}

export default ShowUsers;