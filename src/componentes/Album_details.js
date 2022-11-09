import React, { useEffect } from "react";
import 'bootstrap';
import { useState } from "react";
import Photos from "./Photos";


export default function Album_details(props){
    const album=props.activo;
    const [detalles,setDetalles]=useState('');    
    const dir='https://jsonplaceholder.typicode.com/albums/'+album.id;
    const albums=async()=>{
        const api=await fetch(dir);
        const result=await api.json();        
        setDetalles(result);
    }
    useEffect(()=>{albums()},[]);
    return(
         <>               
              { detalles ?
               (
                <div className='conatainer-fluid'>
                  <h2 className='text-primary p-2 text-uppercase'><span className='text-secondary text-shadow'>Album:</span> {album.title}</h2>
                  <div className='container-fluid'>                    
                    <Photos activo={album} />
                  </div>
                </div>
               ):
              (
                <>No data found</>
              )}    
         </>
    );
}