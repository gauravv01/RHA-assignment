import React,{useState} from 'react';
import './Filter.css';


function Filter({data,filterCb}) {
   const [selectCountry,setCountry] = useState('');
   const [selectCities,setCity] = useState(data);
    function countryFilter(e){
        if(  selectCountry == e.target.value  )
        return;
        setCountry(e.target.value);
        setCityArr(e.target.value); 
        filterCb(e.target.value)
    }
    function cityFilter(e){
        if(e.target.value == ''){
            filterCb(e.target.value,selectCountry)
            return;
        }
        filterCb(e.target.value,selectCountry,'city')
    }
    function setCityArr(country){
        let cities = data.filter((val)=> val.country === country);
        setCity(cities);
    }
    
  return (
    <div className='main'>
       <h2>Filter Section</h2> 
       <div className='child'>
        <div>
       <p>Country</p>
      <select onClick={countryFilter}>
        <option className='blank'></option>
{data && data.map((itr)=>{return <option key={itr.id}  >{itr.country}</option>
})}
      </select>
      </div>
      <div>
      <p>City</p>
      <select onClick={cityFilter}>
        <option></option>
      {selectCities && selectCities.map((itr)=>{return <option key={itr.id}>{itr.city}</option>
})}
      </select>
      </div>
      </div>
    </div>
  )
}

export default Filter
