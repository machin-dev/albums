import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import {  ArrowBarLeft, ArrowBarRight, Mailbox2, PersonFill } from "react-bootstrap-icons";

export default function User_posts(props){
    const user_activo=props.user_activo;
    const [posts, setPosts]=useState('');        
    const get_posts=async()=>{
        const api=await fetch('https://jsonplaceholder.typicode.com/users/'+user_activo.id+'/posts');        
        const result=await api.json();          
         setPosts(result);           
       }
       useEffect(()=>{get_posts()},[]);
    return(
      <div className='container-fluid bg-light'>      
       
        { posts ? (
            <div className='container-fluid'>
              <div className='container-fluid d-flex justify-content-center'>
             
               <h1 className='text-secondary text-center'>{user_activo.name}</h1>
             
             </div>  
              <div className='container-flui d-flex justify-content-center'>
              <p className='m-2'><PersonFill /> {user_activo.username} </p>               
              <p className='m-2'><Mailbox2 /> {user_activo.email}</p> 
              </div>
              {posts.map((p,index)=>(
                <div className="card d-inline-flex" style={{height:450, width:300}} key={index}>
                <div className="card-body">
                  <h5 className="card-title">{p.title}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">usuario: {user_activo.name}</h6>
                  <p className="card-text">{p.body}</p>                  
                </div>
              </div>
              ))}
            </div>
        ):(
            <button className="btn btn-danger">Home</button>        
        )}
         
         
      </div>
    );
}