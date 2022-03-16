import React, { Component, useState } from 'react'
import Recyclebin from './recyclebin'
import Waste from './GarbageClassification/waste'
import './style.css'

export default class sortingcanvas extends Component {
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
          <div className="mt-4">
            <button type="button" onClick={this.showBinComponent} className={this.state.show? "btn-round btn-clicked":"btn-round btn-unclicked"} >Type of bins</button>
            <button type="button" onClick={this.showWasteComponent} className={!this.state.show? "btn-round btn-clicked":"btn-round btn-unclicked"}>Garbage items</button>
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
