import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import ListAlbums from "./ListAlbums";
import { useState } from "react";
import Album_details from "./Album_details";

export default function Tablero(){
    const [aActivo, setAActivo]=useState(null);
    return(
        <div className='container-fluid border '>
            <div className="row">
             <div className="col col-lg-3 bg-dark border vh-100 overflow-auto">
                <ListAlbums act={aActivo} setAct={setAActivo}/>
             </div>
             <div className="col text-center vh-100 overflow-auto bgImg">
                {
                    aActivo ?  
                      (<Album_details activo={aActivo} />):
                      (
                        <div className='container vh-100 d-flex align-items-center justify-content-center'>
                             <h2 className='text-secondary bg-white opacity-50'>Seleccione un album para ver los detalles</h2>
                        </div>
                      )
                  
                }
                
             </div>
            </div>
           
        </div>
    );
}