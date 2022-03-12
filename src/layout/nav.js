import React, { Component } from 'react'
import { NavLink, Route } from 'react-router-dom'
import facebookIcon from '../assets/images/header/facebook.png'
import emailIcon from '../assets/images/header/email.png'
import twitterIcon from '../assets/images/header/twitter.png'
import './style.css'
export default class header extends Component {
  render() {
    return (
      <div>
        <nav  aria-label="Ninth navbar example">
          <div className="navbar">
            <div>
              <ul class="navbar-link">
                <li>
                  <a aria-current="page" href="/">Home</a>
                </li>
                <li>
                  <NavLink to="/sorting">Garbage Classification</NavLink>
                </li>
                <li>
                  <a href="/">Councils Information</a>
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
