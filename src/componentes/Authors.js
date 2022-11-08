import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import Posts_numbers from "./Posts_numbers";
import Albuns_numbers from "./Albuns_numbers";


export default function Authors(props){
    const [authors, setAuthors]=useState('');
    const {user_activo, setUser_activo}=props;
    const get_auth=async()=>{
        const api=await fetch('https://jsonplaceholder.typicode.com/users');
        const result=await api.json();
       // console.log(result);
        setAuthors(result);            
       }  
    console.log(user_activo);    
    useEffect(()=>{get_auth()},[]);     
    return(
      <div className="container-fluid bgImg">
           {authors ? (
            <>
            
            <ul className="list-group list-group-numbered">
             {authors.map((a,index)=>(
                <li className="list-item bg-light bg-opacity-50 m-2 text-start" key={index}>
                  <h4 className="fw-bold d-inline-flex" key={index}>{a.id}-{a.name}</h4>
                  <p className="d-inline-block text-secondary ms-4">User Name: {a.username} </p>
                  <Link className="d-inline-block text-primary ms-4 position-relative" onClick={()=>setUser_activo(a)} to='/User_posts'>Ver Posts: <Posts_numbers user={a.id} /></Link>                 
                  <p className="d-inline-block text-success ms-4 position-relative">Albums: <Albuns_numbers user={a.id} /></p>                 
                  </li>
              ))}
             </ul>
             </>
             ):(
              <></>
             )}              
         
      </div>
    );
}