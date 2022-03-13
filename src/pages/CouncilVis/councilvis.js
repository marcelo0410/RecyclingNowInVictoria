import React, { Component } from 'react'
import LineChartVis from './linechartvis'
import DountChartVis from './donutchartvis'

export default class councilvis extends Component {
  state = {
    councilOption:"",
    categoryOption:""
  }
  render() {
    return (
      <div>
          <h2 className='mt-5 mb-5'>Getting to know your council</h2>
          <div style={{display:"flex", justifyContent:"space-evenly"}}>
            <select name="Council" id="council">
              <option value="" disabled selected>Council</option>
              <option value="43">Melbourne City Council</option>
              <option value="52">Mornington Peninsula Shire Council</option>
              <option value="73">Whittlesea City Council</option>
              <option value="77">Yarra Ranges Shire Council</option>
            </select>
            <select name="Category" id="Category">
              <option value="" disabled selected>Category</option>
              <option value="1">General Waste</option>
              <option value="2">Garbage</option>
              <option value="3">Recycle</option>
              <option value="4">Organic</option>
              <option value="5">Glass</option>
            </select>
            <input type="submit" value={"confirm"}></input>
          </div>
          <div style={{display:"flex",justifyContent:"center", marginTop:"50px"}}>
            <div className='mt-3' style={{width:"40%"}}>
              <LineChartVis/>
            </div>
            <div>
              <DountChartVis/>
            </div>
          </div>
      </div>
    )
  }
}
