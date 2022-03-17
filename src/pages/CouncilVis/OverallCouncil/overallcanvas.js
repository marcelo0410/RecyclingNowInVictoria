import React, { Component } from 'react'
import DiversionRateBarChart from './diversionratebarchart'
import WasteVolumeBarChart from './wastevolumebarchart'
import StackedPlotVis from './stackedplotvis'

export default class overallcanvas extends Component {
  render() {
    return (
      <div>
        <div style={{display:"flex",justifyContent:"space-evenly", marginTop:"50px", flexWrap:"no-wrap"}}>
            <div style={{justifyContent:"center"}}>
              <h3 className='mb-2'>Top councils with highest diversion rate</h3>
              <p style={{marginTop:"30px"}}>The bar plot represents top 7 councils which have the highest diversion rate among 2019-2020.</p>
            </div>
            <DiversionRateBarChart/>
        </div>
        <div style={{display:"flex",justifyContent:"space-evenly", marginTop:"50px", flexWrap:"no-wrap"}}>
            <WasteVolumeBarChart/>
            <div style={{justifyContent:"center", marginLeft:"10px"}}>
              <h3 className='mb-2'>General waste volume ranking</h3>
              <p style={{marginTop:"30px"}}> The bar plot below shows top 7 councils which have the highest total general waste collected of councils in 2019.</p>
            </div>
        </div>
        <div style={{display:"flex",justifyContent:"space-evenly", marginTop:"50px", flexWrap:"no-wrap"}}>

            <div style={{justifyContent:"center"}}>
              <h3 className='mb-2'>Total collected waste &amp; total processed waste ratio</h3>
              <p style={{marginTop:"30px"}}> The chart shows the ratio between total collected waste and total processed waste. High total processed waste  represents high level of waste recycling in councils.</p>
            </div>
            <StackedPlotVis/>
        </div>
        
      </div>
      
    )
  }
}
