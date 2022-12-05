import React from 'react'
import Card from '../Components/Card'
import Filter from '../Components/Filter'

function Home(props) {
  return (
    <div>
      <Filter data={props.optionData} filterCb={props.filterCb}/>
      <Card data={props.data}/>
    </div>
  )
}

export default Home
