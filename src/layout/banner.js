import React, { Component } from 'react'
import './style.css'
import bannerPhoto from '../assets/images/banner/banner.jpeg'
export default class banner extends Component {
  render() {
    return (
      <div className='banner' style={{marginLeft:"32px"}}>
          {/* <img src={bannerPhoto}></img> */}
          <p className="mt-2" ><br/>You never know <br/>what’s gonna cost</p>
          <p className="mt-1" style={{color:"#55C595",fontWeight: "bold"}}>If you do this</p>
          <a href='#'>Explore More&gt;&gt;</a>
      </div>
    )
  }
}
