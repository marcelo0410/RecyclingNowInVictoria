import React, { Component, useState } from 'react'
import Recyclebin from './recyclebin'
import Waste from './GarbageClassification/waste'
import './style.css'

export default class sorting extends Component {
    constructor(props){
        super(props)
        this.state = {
            show: true
        }
        this.showBinComponent = this.showBinComponent.bind(this)
        this.showWasteComponent = this.showWasteComponent.bind(this)
    }
    showBinComponent(){
        this.setState({
            show: true
        })
    }
    showWasteComponent(){
      this.setState({
          show: false
      })
  }
  render() {
    return (
      <div className='ms-4'>
          <div className="outer mt-3">
            <button type="button" onClick={this.showBinComponent} className={this.state.show== true? "btn btn-success":"btn btn-outline-success"} >BINS</button>
            <button type="button" onClick={this.showWasteComponent} className={this.state.show== false? "btn btn-success":"btn btn-outline-success"}>WASTE</button>
            
          </div>
          <div>
              {this.state.show}
            {this.state.show && <Recyclebin/>}
            {!this.state.show && <Waste/>}
          </div>
          
          
      </div>
    )
  }
}
