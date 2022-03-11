import React, { Component } from 'react'
import RedBinImage from "../assets/images/plasticbottle/plasticbottle1.jpg"
import YellowBinImage from "../assets/images/plasticbottle/plasticbottle2.jpg"
import BlueBinImage from "../assets/images/plasticbottle/plasticbottle1.jpg"
import GreenBinImage from "../assets/images/plasticbottle/plasticbottle2.jpg"

export default class recyclebin extends Component {
  render() {
    return (
<div class="row row-cols-1 row-cols-md-4 g-4 mt-3">
  <div class="col">
    <div class="card h-100">
      <img src={RedBinImage} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Red</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
      <div class="card-footer">
        <small class="text-muted">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src={RedBinImage} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Yellow</h5>
        <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      </div>
      <div class="card-footer">
        <small class="text-muted">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src={RedBinImage} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Blue</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      </div>
      <div class="card-footer">
        <small class="text-muted">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src={RedBinImage} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Green</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      </div>
      <div class="card-footer">
        <small class="text-muted">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
</div>
    )
  }
}
