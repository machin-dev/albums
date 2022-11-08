import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import Photos from "./Photos";



export default function Albums(){
    const [album,setAlbum]=useState(null); 
    const [foto,setFoto]=useState(null);  
    const albums=async()=>{
     const api=await fetch('https://jsonplaceholder.typicode.com/albums/1');
     const result=await api.json();
     console.log(result);
     setAlbum(result);  
     fotos();   
    } 
    const fotos=async()=>{
        const api=await fetch('https://jsonplaceholder.typicode.com/albums/1/photos');
        const result=await api.json();
        console.log(result);
        setFoto(result); 
            
       }  
    return(
       
      <div className='container-fluid' >        
          <button type="button" className="btn btn-primary" onClick={albums}>Ver</button> 
          {album ? (                  
                    <div className='container-fluid b-2 border'>
                     <h1>{album.title}</h1>
                     {
                      foto ?
                      (
                        foto.map((f,index)=>
                        (
                          <div className='d-inline-flex m-1 p-2 ' key={index} >
                            <img src={f.thumbnailUrl} className="img-fluid rounded-top" alt={f.title} />
                          </div>
                        ))
                      ):
                      (
                        <p>no fotos</p>
                      )
                     }
                    </div> 
                                            
                    
            ):
            (
               <p>vacio</p>
            )
          }
        
      </div>
    );
}