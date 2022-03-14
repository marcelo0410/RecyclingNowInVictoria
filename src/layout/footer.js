import React, { Component } from 'react'
import facebookIcon from '../assets/images/header/facebook.png'
import emailIcon from '../assets/images/header/email.png'
import twitterIcon from '../assets/images/header/twitter.png'
import './style.css'

export default class footer extends Component {
  render() {
    return (
      <footer class="pt-4 mt-1 pt-md-5 border-top" style={{background:"#55C595", marginLeft:"32px"}}>
        <div class="row justify-content-md-center">
          <div class="col-2 col-lg-2">
            <h6 style={{color:"white", fontWeight:"bold"}}>Home Page</h6>
            
          </div>
          <div class="col-2 col-md">
            <h6 style={{color:"white", fontWeight:"bold"}}>Garbage Classification</h6>
            <ul class="list-unstyled text-small">
              <li class="mb-1"><a class="link-secondary text-decoration-none" style={{color:"white"}} href="#">Type of bins</a></li>
              <li class="mb-1"><a class="link-secondary text-decoration-none" style={{color:"white"}} href="#">Garbage items</a></li>

            </ul>
          </div>
          <div class="col-2 col-md">
            <h6 style={{color:"white", fontWeight:"bold"}}>Councils Information</h6>
            <ul class="list-unstyled text-small" >
              <li class="mb-1"><a class="link-secondary text-decoration-none" style={{color:"white"}} href="#">General review</a></li>
              <li class="mb-1"><a class="link-secondary text-decoration-none" style={{color:"white"}} href="#">Councils ranking</a></li>
              <li class="mb-1"><a class="link-secondary text-decoration-none" style={{color:"white"}} href="#">Category ranking</a></li>
              <li class="mb-1"><a class="link-secondary text-decoration-none" style={{color:"white"}} href="#">Councils statistical</a></li>

            </ul>
          </div>
          <div class="col-2 col-md">
            <h6 style={{color:"white", fontWeight:"bold"}}>Relative Events</h6>
            <ul class="list-unstyled text-small" >
              <li class="mb-1"><a class="link-secondary text-decoration-none" style={{color:"white"}} href="#">Comming events</a></li>
              <li class="mb-1"><a class="link-secondary text-decoration-none" style={{color:"white"}} href="#">Contribute yourself</a></li>
              <li class="mb-1"><a class="link-secondary text-decoration-none" style={{color:"white"}} href="#">What's in your council</a></li>
              <li class="mb-1"><a class="link-secondary text-decoration-none" style={{color:"white"}} href="#">Volunteer programs</a></li>
              <li class="mb-1"><a class="link-secondary text-decoration-none" style={{color:"white"}} href="#">Education events</a></li>

            </ul>
          </div>
          <div class="col-2 col-lg-2">
            <h6 style={{color:"white", fontWeight:"bold"}}>Other Resources</h6>
            <ul class="list-unstyled text-small" >
              <li class="mb-1"><a class="link-secondary text-decoration-none" style={{color:"white"}} href="#">Waste management</a></li>
              <li class="mb-1"><a class="link-secondary text-decoration-none" style={{color:"white"}} href="#">Relative facilities</a></li>

            </ul>
          </div>
          
          <div class="row justify-content-md-center">
            <div class="col-3 col-md">
              
            </div>
            <div class="col-6 col-md">
              {/* <img class="mb-2" src="../assets/brand/bootstrap-logo.svg" alt="" width="24" height="19"> */}
              <small class="d-block mb-3 text-muted" style={{color:"white"}}>&copy; RecyclenowinVic 2022 - 2022</small>
            </div>
            <div class="col-3 col-md" id="nav-socialmedia-icon">
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
        </div>
      </footer>
    )
  }
}
