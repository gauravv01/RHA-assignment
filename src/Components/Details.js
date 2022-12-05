import React from 'react';
import { useState ,useEffect} from 'react';
import {useParams} from 'react-router-dom';



function Details(props) {
   const [data,setdata]= useState([]);
   const {id}=useParams();
    
    useEffect(()=>{
        findData();
    },[data])
    function findData(){
        const data=props.data.find(item=>item.id==+id);
        setdata(data)
                }
  return (
    <div>
     <li>Name:{data?.name}</li> 
     <li>City:{data?.country}</li> 
     <li>Country:{data?.country}</li> 
     <li>Zipcode:{data?.zipcode}</li> 
     <li>Street:{data?.street}</li> 
     <li>Email:{data?.email}</li> 
     <li>Phone:{data?.phone}</li> 
     <li>Gender:{data?.women?'women':'men'}</li> 
     <li></li> 
    </div>
  )
}

export default Details
