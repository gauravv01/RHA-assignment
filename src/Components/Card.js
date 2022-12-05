import React from 'react';
import {Link} from 'react-router-dom';
import './Card.css';

function Card({data}) {
    // const [images,setimages]=useState([]);
   
    
//    console.log(data)

  return (
    <div className='parent'>
     <ol className='div'>Image
     {data && data.map(itr=>{return <Link key={itr.id} to={`/${itr.id}`}> <img  src={`https://randomuser.me/api/portraits/${itr.women?'women':'men'}/${itr.id}.jpg`} alt='an iteration'/></Link>})}
      </ol>
      <ol className='div'>FullName
     {data && data.map(itr=>{return <li key={itr.id}>{itr.name}</li>})}
      </ol>
      <ol className='div'>Phone
     {data && data.map(itr=>{return <li key={itr.id}>{itr.zipCode?itr.zipCode:'NA'}</li>})}
      </ol>
      <ol className='dive'>Email
     {data && data.map(itr=>{return <li key={itr.id}>{itr.email}</li>})}
      </ol>
      <ol className='div'>City
     {data && data.map(itr=>{return <li key={itr.id}>{itr.city}</li>})}
      </ol>
      <ol className='div'>Country
     {data && data.map(itr=>{return <li key={itr.id}>{itr.country}</li>})}
      </ol>
    </div>
  )
}

export default Card
