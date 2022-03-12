import React, { Component } from 'react'
import RedBinImage from "../assets/images/recyclebin/redbin.png"
import YellowBinImage from "../assets/images/recyclebin/yellowbin.png"
import BlueBinImage from "../assets/images/recyclebin/bluebin.png"
import GreenBinImage from "../assets/images/recyclebin/greenbin.png"
import './style.css'

export default class recyclebin extends Component {
  render() {
    return (
      <div class="card-group mt-5">
        <div class="card">
          <div className='card-photo-bgc-red'>
            <img src={RedBinImage} class="card-img-top img-same-wh" alt="..."/>
          </div>
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
        <div class="card">
          <div className='card-photo-bgc-yellow'>
            <img src={YellowBinImage} class="card-img-top img-same-wh" alt="..."/>
          </div>
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
        <div class="card">
          <div className='card-photo-bgc-green'>
            <img src={GreenBinImage} class="card-img-top img-same-wh" alt="..."/>
          </div>
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
        <div class="card">
          <div className='card-photo-bgc-blue'>
            <img src={BlueBinImage} class="card-img-top img-same-wh" alt="..."/>
          </div>
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
      </div>
    )
  }
}
