import React, { Component } from 'react'
import { NavLink} from 'react-router-dom'
import './style.css'
import bannerPhoto from '../assets/images/banner/banner.jpeg'
export default class banner extends Component {
  render() {
    return (
      <div className='banner' style={{marginLeft:"32px"}}>
          <p className="mt-2" ><br/>Do you really know</p>
          <p className="mt-1" style={{color:"#55C595",fontWeight: "bold"}}>GARBAGE <br/>CLASSIFICATION</p>
          <NavLink to="/sorting">Explore More&gt;&gt;</NavLink>
      </div>
    )
  }
}
