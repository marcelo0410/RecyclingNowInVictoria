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
      <div className='ms-4'>
          <div className="mt-3">
            <button type="button" onClick={this.showSingleCouncilComponent} className={this.state.show? "btn btn-success":"btn btn-outline-success"} >Know your council</button>
            <button type="button" onClick={this.showCouncilsComponent} className={!this.state.show? "btn btn-success":"btn btn-outline-success"}>Council Trends</button>
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
