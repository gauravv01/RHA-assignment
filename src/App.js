import { useState,useEffect, Fragment } from "react";
import axios from "axios";
import {Routes,Route} from 'react-router-dom';
import Home from "./Pages/Home";
import Details from "./Components/Details";


function App() {
  const [data,setdata]=useState([]);
  const [optionData,setOptionData]=useState([]);

  useEffect(()=>{
    async function fetch(){
      const data=await axios.get('https://607a90abbd56a60017ba2c5e.mockapi.io/Customer');
      const finaldata=data.data;
      setdata(finaldata);
setOptionData(finaldata);       
      
      
    }
    fetch();
  },[]);
  function handleFilter(val){
    if(val == '')
    setdata(optionData)
    else{
    let localData=optionData.filter((itr)=>{return itr.country===val});
    setdata(localData);
    }
  }
  return (
    <Fragment>
    <Routes >
      <Route path='/' element={<Home data={data} optionData={optionData} filterCb={handleFilter}/>}/>
      
      <Route path='/:id' element={<Details data={data}/>} />

     
    </Routes>
    </Fragment>
  );
}

export default App;
