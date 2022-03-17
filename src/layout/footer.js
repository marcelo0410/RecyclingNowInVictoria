import React, { Component } from 'react'
import facebookIcon from '../assets/images/header/facebook.png'
import emailIcon from '../assets/images/header/email.png'
import twitterIcon from '../assets/images/header/twitter.png'
import './style.css'

export default class footer extends Component {
  render() {
    return (
      <footer class="pt-4 mt-3 pt-md-5 border-top" style={{background:"#55C595", marginLeft:"32px"}}>
        <div class="row justify-content-md-center">
          <div class="col-10 col-md">
            <small style={{color:"white", fontsize:5}}>
              We acknowledge the Traditional Owners of country throughout Australia and recognise their continuing connection to land, waters and culture. We pay our respects to their Elders past, present and emerging.
              <br/> 
            </small>
          </div>
          <div class="col-3 col-md">
            
          </div>
          <div class="col-6 col-md">
            {/* <img class="mb-2" src="../assets/brand/bootstrap-logo.svg" alt="" width="24" height="19"> */}
            <small class="d-block mb-3" style={{color:"white"}}>Copyright &copy; RecyclenowinVic 2022 - 2022 | TA34</small>
          </div>
          <div class="col-3 col-md " id="nav-socialmedia-icon">
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
      </footer>
    )
  }
}
