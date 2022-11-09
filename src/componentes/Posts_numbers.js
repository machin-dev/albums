import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from "react";

export default function Posts_numbers(props){
    const user=props.user;
    const [cant,setCant]=useState(0);
    const get_posts=async()=>{
        const api=await fetch('https://jsonplaceholder.typicode.com/users/'+user.id+'/posts');        
        const result=await api.json();
        console.log(result.length);         
        setCant(result.length);              
       }
       useEffect(()=>{get_posts()});
    return(
        <span className=" rounded-pill bg-secondary bg-opacity-50">
            {cant}
        </span>
    );
}