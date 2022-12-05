import React from 'react';
import { useState ,useEffect} from 'react';
import {useParams} from 'react-router-dom';
import './Details.css';



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
    <div className='outer'>
        <div><img src={`https://randomuser.me/api/portraits/${data.women?'women':'men'}/${data.id}.jpg`} alt='an iteration'/>
        <li>Name:{data?.name}</li> 
        </div>
     <div>
     <li>City:{data?.country}</li> 
     <li>Country:{data?.country}</li> 
     <li>Zipcode:{data?.zipcode}</li> 
     <li>Street:{data?.street}</li> 
     <li>Email:{data?.email}</li> 
     <li>Phone:{data?.phone}</li> 
     <li>Gender:{data?.women?'women':'men'}</li> 
     </div>
    </div>
  )
}

export default Details
