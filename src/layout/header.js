import React, { Component } from 'react'
import { NavLink, Route } from 'react-router-dom'
import logo from '../assets/images/logo.png'
import './style.css'
export default class header extends Component {
  render() {
    return (
      <div className='header'>
        <NavLink to="/">
          <img src={logo} style={{width:"130px", height:"50px"}}/>
        </NavLink>
        
      </div>
    )
  }
}
