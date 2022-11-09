import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import Posts_numbers from "./Posts_numbers";
import Albuns_numbers from "./Albuns_numbers";
import { CardText } from "react-bootstrap-icons";


export default function Authors(props){
    const {author_activo, setAuthor_activo}=props;
    const [autores, setAutores]=useState('');
    const get_auth=async()=>{
        const api=await fetch('https://jsonplaceholder.typicode.com/users');
        const result=await api.json();      
        setAutores(result);            
       } 
       const activar=(a)=>{
        setAuthor_activo(a);        
       } 
     
    useEffect(()=>{get_auth()},[]);     
    return(
      <div className="container-fluid bgImg vh-100">
           {autores ? (
            <>
              {autores.map((a,index)=>(
                <div className="btn card d-inline-flex m-1 shadow-sm mb-1 border-0" style={{height:450, width:300}} key={index}>
                <div className="card-body">
                  <h5 className="card-title">{a.name}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">user name: {a.username}</h6>
                  <p  className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>                  
                </div>
                <p className='position-relative' onClick={()=>activar(a)} ><Link to='/User_posts' className=''>Posts: <Posts_numbers user={a} /></Link></p>
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