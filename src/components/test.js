import React, { Component } from 'react'
import axios from 'axios';

export default class test extends Component {
    state ={
        garbages:[]
    }
    // 
    // 
    componentDidMount(){
        axios.get('https://recycling-vic-back-end.herokuapp.com/v1/gg/findAll')
        .then(res =>{
            const garbages = res.data;
            this.setState({garbages})
        })
    }
  render() {
    return (
      <div>
          <ul>
              {
                  this.state.garbages.map(garbage =>
                    <li key={garbage.id}>{garbage.name +' , '+ garbage.genre}</li>
                    )
              }
          </ul>
      </div>
    )
  }
}
