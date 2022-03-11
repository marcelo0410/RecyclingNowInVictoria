import React, { Component } from 'react'
import Searchbar from './utils/searchbar/searchbar'
import Searchresult from '../component/searchresult'
import Wastemouseenter from '../component/waste-mouseenter-photo'

export default class waste extends Component {
  constructor(props){
    super(props)
    this.state = {
      classification:null
    }
  }

  returnGenre= (responseData) =>{
    this.setState({
      classification:responseData
    })
  }

  render() {
    return (
      <div>
        <Searchbar returnGenre={this.returnGenre}/>
        {this.state.classification? <Searchresult result={this.state.classification}/>:null}
        <Wastemouseenter/>
      </div>
    )
  }
}
