import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import facebookIcon from '../assets/images/header/facebook.png'
import emailIcon from '../assets/images/header/email.png'
import twitterIcon from '../assets/images/header/twitter.png'
import './style.css'
export default class header extends Component {
  render() {
    return (
      <div>
        <nav  aria-label="Ninth navbar example">
          <div className="navbar" style={{height:"42px", marginLeft:"0px"}}>
            <div>
              <ul class="navbar-link" style={{fontSize:"10px", fontWeight:"bold"}}>
                <li>
                  <NavLink to="/home" activeStyle={{ backgroundColor:"#55C595",color: "white"}}>Home</NavLink>
                </li>
                <li>
                  <NavLink to="/sorting" activeStyle={{backgroundColor:"#55C595",color: "white"}}>Garbage Classification</NavLink>
                </li>
                <li>
                  <NavLink to="/council" activeStyle={{backgroundColor:"#55C595",color: "white"}}>Council Information</NavLink>
                </li>
                <li>
                  <a href="/">Events</a>
                </li>
                <li>
                  <a href="/">Other Resources</a>
                </li>
              </ul>
            </div>
            <div id="nav-socialmedia-icon">
              <ul className='navbar-social'>
                <li>
                  <a href="#">
                    <img src={facebookIcon}></img>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={twitterIcon}></img>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={emailIcon}></img>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}
