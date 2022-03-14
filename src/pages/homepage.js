import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './style.css'

export default class homepage extends Component {
  render() {
    return (
      <div>
        {/* <div className='banner2' style={{marginLeft:"32px"}}>
          <p className="mt-2" style={{marginLeft:"20px",fontWeight:"bold",fontSize:20}} >Get to know the bins</p>
          <div class="row justify-content-md-center">

          </div>
        </div> */}
        <div class="row justify-content-md-center">
          <div class="col-2 col-lg-2" className='banner3' style={{marginLeft:"32px"}}>
            {/* <img src={bannerPhoto}></img> */}
            <p className="mt-2" style={{marginLeft:"20px",fontSize:20,paddingBottom:0,paddingTop:50}}>Today in your</p>
            <p className="mt-1" style={{marginLeft:"20px",color:"#55C595",fontWeight: "bold",paddingTop:0}}>Council</p>
            <p style={{marginLeft:"20px",fontSize:15,paddingBottom:0,width:200}}>Learn more activities and events about wastes and sustainability with us!</p>
            <NavLink to="/council" style={{marginLeft:"30px"}}>Explore More&gt;&gt;</NavLink>
          </div>
          <div class="col-2 col-md" style={{paddingTop:50, height:300, width:250}}>
            <img class="card-img-top" src="https://github.com/zx0217/RecyclingNowInVictoriaIMG/blob/39703e03959e9da1d74c2dd5a45db4dde870e996/glass-bottle.jpeg?raw=true" alt="Card image cap">
            </img>
            <div class="card-body">
              <p class="card-text" style={{color:"#55C595", fontWeight:"bold"}}>Waste Transfer Station</p>
            </div>
          </div>
          <div class="col-2 col-md" style={{paddingTop:50, width:225}}>
            <img class="card-img-top" src="https://github.com/zx0217/RecyclingNowInVictoriaIMG/blob/39703e03959e9da1d74c2dd5a45db4dde870e996/milk-4452655_960_720.jpg?raw=true" alt="Card image cap">
            </img>
            <div class="card-body">
              <p class="card-text" style={{color:"#55C595", fontWeight:"bold"}}>Hard Waste Collection</p>
            </div>
          </div>
          <div class="col-2 col-md" style={{paddingTop:50, width:225}}>
            <img class="card-img-top" src="https://github.com/zx0217/RecyclingNowInVictoriaIMG/blob/39703e03959e9da1d74c2dd5a45db4dde870e996/pexels-michael-burrows-7129716.jpg?raw=true" alt="Card image cap">
            </img>
            <div class="card-body">
              <p class="card-text" style={{color:"#55C595", fontWeight:"bold"}}>Hard Waste Collection</p>
            </div>
          </div>
        </div>


      </div>
      
      
    )
  }
}