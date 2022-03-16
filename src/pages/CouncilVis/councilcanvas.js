import React, { Component } from 'react'
import SingleCouncilCanvas from './SingleCouncil/singlecouncilcanvas'
import CouncilsCanvas from './OverallCouncil/overallcanvas'

export default class councilcanvas extends Component {
    constructor(props){
        super(props)
        this.state = {
            show: true
        }
    }
    showSingleCouncilComponent = () =>{
        this.setState({
            show: true
        })
    }
    showCouncilsComponent = () =>{
      this.setState({
          show: false
      })
  }
  render() {
    return (
      <div className='ms-4 mt-3'>
          <div className="mt-3" style={{display:"inline-block", marginRight:"10px"}}>
            <button type="button" onClick={this.showSingleCouncilComponent} className={this.state.show? "btn-round btn-clicked":"btn-round btn-unclicked"}>Know your council</button>
            <button type="button" onClick={this.showCouncilsComponent} className={!this.state.show? "btn-round btn-clicked":"btn-round btn-unclicked"}>Council Trends</button>
          </div>
          <div>
              {this.state.show}
            {this.state.show && <SingleCouncilCanvas/>}
            {!this.state.show && <CouncilsCanvas/>}
          </div>
      </div>
    )
  }
}
