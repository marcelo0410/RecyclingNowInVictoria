import React, { Component } from 'react'
import Searchbar from '../../utils/searchbar/searchbar'
import Searchresult from './searchresult'
import Wastemouseenter from './wastephoto'

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
        { Array.isArray(this.state.classification) && this.state.classification.length < 1? <div style={{marginBotton:"50px"}}>Sorry... The item you've requested is currently not available! <br/> Please enter again!</div>:null}
        {!this.state.classification && <Wastemouseenter/>}
      </div>
    )
  }
}
