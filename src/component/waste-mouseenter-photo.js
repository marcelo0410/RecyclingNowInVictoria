import React, { Component } from 'react'
import ybin from './images/recyclebin/yellowbin.jpg'
import p1 from './images/plasticbottle/plasticbottle1.jpg'

export default class wastemouseenter extends Component {

    state={
        img:p1
    }

    handleMouseEnter = ()=>{
        this.setState({
            img:ybin
        })

    }

    handleMouseOut = () =>{
        this.setState({
            img:p1
        })
    }
  render() {
    return (
      <div>
          <div className='mt-5 mb-2'>Common genre of garbage</div>
          <div style={{display:"flex"}}>
              <div>
                <img src={this.state.img} onMouseEnter={this.handleMouseEnter} onMouseOut={this.handleMouseOut} style={{width:"180px", height:"100px"}}/> 
              </div>
                <div>
                    <img src={this.state.img} onMouseEnter={this.handleMouseEnter} onMouseOut={this.handleMouseOut} style={{width:"180px", height:"100px"}}/>
                </div>            
          </div>
          
      </div>
    )
  }
}
