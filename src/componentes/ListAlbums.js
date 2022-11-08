import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from "react";


export default function ListAlbums(props){
    const {act, setAct}=props;
    const [album,setAlbum]=useState(null); 
    const albums=async()=>{
        const api=await fetch('https://jsonplaceholder.typicode.com/albums');
        const result=await api.json();
        /*console.log(result);*/
        setAlbum(result);            
       } 
       const activar=(i)=>{
        /*console.log(i);*/
        setAct(i);
       }
      useEffect(()=>{albums()},[]);
      
       return (                  
          <ul className='list-group m-0'>           
             {album ? (
              <>
               {
                album.map((a,index)=>(
                       <li className='btn list-group-item text-start' key={index} title={a.title} onClick={()=>activar(a.id)} >                         
                         <p className='text-secondary fw-bold'>{a.id}: {a.title}</p>
                       </li>
                    ))
                }
                 </>):(
                     <>  
                     No data found        
                     </>
                     )}
           </ul>          
       
       );
}