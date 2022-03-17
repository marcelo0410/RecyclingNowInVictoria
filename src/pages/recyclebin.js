import React, { Component } from 'react'
import './style.css'

export default class recyclebin extends Component {
  photoPrefix = "https://github.com/zx0217/RecyclingNowInVictoriaIMG/blob/362fed1a53791d09d0c764204067f1d35c1ca225/Bins/"
  photoPostfix = "?raw=true"
  state={
    disable:[true, true, true, true]
  }
  binArray= [
    {
      id:1,
      title:"General waste",
      imgUrl:"garbage1.png",
      hoverUrl:"garbage2.png"
    },
    {
      id:2,
      title:"Recycling",
      imgUrl:"recycle1.png",
      hoverUrl:"recycle2.png"
    },
    {
      id:3,
      title:"organic wastes",
      imgUrl:"organics1.png",
      hoverUrl:"organics2.png"
    },
    {
      id:4,
      title:"Glass container",
      imgUrl:"glass.png",
      hoverUrl:"glass2.png"
    },
  ]

  getId = (e)=>{
    let tempDisable = [...this.state.disable]
    tempDisable[e.currentTarget.id-1] = !tempDisable[e.currentTarget.id-1]
    this.setState({
      disable:tempDisable
    })
  }

  render() {
    return (
      <div>
      <div style={{marginTop:"30px", textAlign:"left", marginLeft:"20px", fontSize:"17px", fontWeight:"bold"}}>Click on bins for detailed information...</div>
      <div class="card-group ms-2 mt-2">
        <div class="card">
          <div id="1" onClick={this.getId} className="img-hover">
            <img src={this.state.disable[0]? (this.photoPrefix+this.binArray[0].imgUrl+this.photoPostfix):(this.photoPrefix+this.binArray[0].hoverUrl+this.photoPostfix)} class="card-img-top img-same-wh" alt="General waste"/>
          </div>
          {!this.state.disable[0] && (
            
          <div class="card-body">
            <h5 class="card-title" style={{fontWeight:"bold", marginBottom:"10px"}}>General waste</h5>
            <p class="card-text">
              <div>This is a red bin to put general wastes, including:</div>
              <ul style={{listStyle:"initial", textAlign:"center", display: "table", marginTop:"10px"}}>
                <li style={{textAlign:"left"}}>General rubbish</li>
                <li style={{textAlign:"left"}}>Nappies (wrapped or bagged)</li>
                <li style={{textAlign:"left"}}>Polystyrene and foam </li>
                <li style={{textAlign:"left"}}>Meat trays</li>
                <li style={{textAlign:"left"}}>Window glass</li>
              </ul>
            </p>
          </div>)}
          
        </div>
        <div class="card">
          <div id="2" onClick={this.getId} className="img-hover">
            <img src={this.state.disable[1]? (this.photoPrefix+this.binArray[1].imgUrl+this.photoPostfix):(this.photoPrefix+this.binArray[1].hoverUrl+this.photoPostfix)} class="card-img-top img-same-wh" alt="..."/>
          </div>
          {!this.state.disable[1] && (<div class="card-body">
            <h5 class="card-title" style={{fontWeight:"bold", marginBottom:"10px"}}>Recycling</h5>
            <p class="card-text">
              <div>This is a yellow bin to put recyclable wastes, including:</div>
              <ul style={{listStyle:"initial", textAlign:"center", display: "table", marginTop:"10px"}}>
                <li style={{textAlign:"left"}}>Plastic bottles and containers </li>
                <li style={{textAlign:"left"}}>Paper and cardboard</li>
                <li style={{textAlign:"left"}}>Aluminium cans</li>
                <li style={{textAlign:"left"}}>Steel cans</li>
                <li style={{textAlign:"left"}}>Delivery boxes</li>
              </ul>
            </p>
          </div>)}
        </div>
        <div class="card">
          <div id="3" onClick={this.getId} className="img-hover">
            <img src={this.state.disable[2]? (this.photoPrefix+this.binArray[2].imgUrl+this.photoPostfix):(this.photoPrefix+this.binArray[2].hoverUrl+this.photoPostfix)} class="card-img-top img-same-wh" alt="..."/>
          </div>
          {!this.state.disable[2] && (<div class="card-body">
            <h5 class="card-title" style={{fontWeight:"bold", marginBottom:"10px"}}>Organic wastes</h5>
            <p class="card-text">
              <div>This is a green bin to put organic wastes, including:</div>
              <ul style={{listStyle:"initial", textAlign:"center", display: "table", marginTop:"10px"}}>
                <li style={{textAlign:"left"}}>Food wastes</li>
                <li style={{textAlign:"left"}}>Garden soil</li>
                <li style={{textAlign:"left"}}>Fruit and vegetable peels</li>
              </ul>
            </p>
          </div>)}
          
        </div>
        <div class="card">
          <div id="4" onClick={this.getId} className="img-hover">
            <img src={this.state.disable[3]? (this.photoPrefix+this.binArray[3].imgUrl+this.photoPostfix):(this.photoPrefix+this.binArray[3].hoverUrl+this.photoPostfix)} class="card-img-top img-same-wh" alt="..."/>
          </div>
          {!this.state.disable[3] && (<div class="card-body">
            <h5 class="card-title" style={{fontWeight:"bold", marginBottom:"10px"}}>Glass container</h5>
            <p class="card-text">
              <div>(colour may be vary based on location)<br/>This is a blue bin to put the glass containers, including:</div>
              <ul style={{listStyle:"initial", textAlign:"center", display: "table", marginTop:"10px"}}>
                <li style={{textAlign:"left"}}>Glass bottles</li>
                <li style={{textAlign:"left"}}>Glass containers for food</li>
              </ul>
            </p>
          </div>)}
          
        </div>
      </div>
      </div>
    )
  }
}
