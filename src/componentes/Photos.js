import React, { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";


export default function Photos(props){
   const aId=props.activo;
   const [foto,setFoto]=useState(null);   
   const dir='https://jsonplaceholder.typicode.com/albums/'+aId+'/photos';
   const fotos=async()=>{
    const api=await fetch(dir);
    const result=await api.json();    
    console.log(result);    
    setFoto(result);  
        
   }  
   useEffect(()=>{fotos()},[aId]);
 return(
    <div className='container-fluid'>
           {
           foto ? (
            <>
            {
               foto.map((f,index)=>(
               <div className="btn card d-inline-flex m-1 shadow-sm mb-1 border-0" style={{height:450, width:300}} key={index}>
                  <img className="card-img-top" src={f.url} alt="Title" />
                  <div className="card-body d-flex align-items-center justify-content-center">
                     <p className="card-title text-secondary text-justify">{f.title}</p>                    
                  </div>
               </div>
              ))
            }
           </>):(
            <>No data found</>
           )}    
    </div>
 );

}