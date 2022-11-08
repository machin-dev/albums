import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";


export default function NavBar(){
    return(  
       <nav className="navbar navbar-expand-sm navbar-light bg-light justify-content-center sticky-top shadow mb-2">
          <div className="nav">
            <Link className="navbar-brand bg-dark rounded-pill p-3 text-light" to='/'>Api JSON Place Holder</Link>
            <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavId">
                <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link" to='/albums' aria-current="page">Albums</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to='/authors'>Authors</Link>
                    </li>                   
                </ul>                
            </div>
         </div>
       </nav>
          
    );
}