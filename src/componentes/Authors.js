import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import Posts_numbers from "./Posts_numbers";
import Albuns_numbers from "./Albuns_numbers";
import { CardText } from "react-bootstrap-icons";


export default function Authors(props){
    const [authors, setAuthors]=useState('');
    const {user_activo, setUser_activo}=props;
    const get_auth=async()=>{
        const api=await fetch('https://jsonplaceholder.typicode.com/users');
        const result=await api.json();      
        setAuthors(result);            
       }   
    useEffect(()=>{get_auth()},[]);     
    return(
      <div className="container-fluid bgImg vh-100">
           {authors ? (
            <>
              {authors.map((a,index)=>(
                <div className="btn card d-inline-flex m-1 shadow-sm mb-1 border-0" style={{height:450, width:300}} key={index}>
                <div className="card-body">
                  <h5 className="card-title">{a.name}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">user name: {a.username}</h6>
                  <p claclassNamess="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>                  
                </div>
                <p className='position-relative'>Posts: <Link to='/User_posts' className=''><Posts_numbers user={a.id} /></Link></p>
                <p className='position-relative'>Albums: <Link to='#' className=''><Albuns_numbers user={a.id} /></Link></p>
              </div>
              ))}
            
            </>
             ):(
              <></>
             )}              
         
      </div>
    );
}