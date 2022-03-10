import React, { Component } from 'react'
import Searchbar from './utils/searchbar/searchbar'

export default class waste extends Component {
  searchWord = React.createRef()


  render() {
    return (
      <div>
        <Searchbar ref={this.searchWord}/>
        
      </div>
    )
  }
}
