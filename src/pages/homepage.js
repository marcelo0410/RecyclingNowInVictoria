import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import StackedPlotVis from '../pages/CouncilVis/OverallCouncil/stackedplotvis'
import './style.css'

export default class homepage extends Component {
  render() {
    return (
      <div>
        <div style={{display:"flex", justifyContent:"center"}}>
          <div class="col-2 col-lg-2" className='banner3' style={{marginLeft:"32px"}}>
            <p className="mt-2" style={{marginLeft:"20px",fontSize:20,paddingBottom:0,paddingTop:50}}>Today in your</p>
            <p className="mt-1" style={{marginLeft:"20px",color:"#55C595",fontWeight: "bold",paddingTop:0}}>Council</p>
            <p style={{marginLeft:"20px",fontSize:15,paddingBottom:0,width:200}}>Learn more activities and events about wastes and sustainability with us!</p>
            <NavLink to="/council" style={{marginLeft:"30px"}}>About council&gt;&gt;</NavLink>
          </div>
          <div style={{marginTop:"30px"}}>
            <StackedPlotVis></StackedPlotVis>
          </div>
        </div>
      </div>
      
      
    )
  }
}