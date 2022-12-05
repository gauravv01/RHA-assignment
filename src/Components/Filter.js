import React,{useState} from 'react';


function Filter({data,filterCb}) {
   const [selectCountry,setCountry] = useState('');
   const [selectCities,setCity] = useState(data);
    function filter(e){
        if( selectCountry !== '' && selectCountry == e.target.value  )
        return;
        setCountry(e.target.value);
        setCityArr(e.target.value); 
        filterCb(e.target.value)
    }
    function setCityArr(country){
        let cities = data.filter((val)=> val.country === country);
        setCity(cities);
    }
    
  return (
    <div>
       <h2>Filter Section</h2> 
       <label>country</label>
      <select onClick={filter}>
        <option className='blank'></option>
{data && data.map((itr)=>{return <option key={itr.id}  >{itr.country}</option>
})}
      </select>
      <label>City</label>
      <select>
        <option></option>
      {selectCities && selectCities.map((itr)=>{return <option key={itr.id}>{itr.city}</option>
})}
      </select>
    </div>
  )
}

export default Filter
