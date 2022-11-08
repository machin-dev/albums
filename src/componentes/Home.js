import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import background from '../img/fondo.jpg';
import '../estilo/estilo.css';

export default function Home(){
    const borde={
        borderRadius: '5px 180px 180px 5px'
    };    
    return(
        <div className='container-fluid vh-100 bgImg' >
            <div className='row h-100 '>
                <div className='col d-flex align-items-center justify-content-center '>
                    <div className='container-fluid mb-4 h-25 bg-primary d-flex align-items-center justify-content-center borde'>
                       <h1 className='text-white'>Api JSON Place Holder</h1>
                    </div>
                </div>
                <div className='col '>
                    
                </div>
            </div>
        </div>
    );
}