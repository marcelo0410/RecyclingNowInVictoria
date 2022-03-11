import React, { Component } from 'react'
import axios from 'axios'
import './searchbar.css'

export default class searchbar extends Component {
  // searchWordRef = React.createRef();
  constructor(props){
    super(props)
    this.state={
      searchText:"",
      disable:false,
      valid:false
    }
    // this.checkInputValidate = this.checkInputValidate.bind(this)
    
  }

  updateInputValue=(evt)=>{
    console.log("this works")
    const value = evt.target.value.trim();
    if(!value.match(/^[a-zA-Z]+$/)){
      this.setState({
        searchText:value,
        disable:true,
        valid:this.state.valid
      })
    } else {
      this.setState({
        searchText:value,
        disable:false,
        valid:this.state.valid
      })
    }
  }

  checkInputValidate(){
    if(this.state.disable){
      this.setState({
        searchText:this.state.searchText,
        disable:this.state.disable,
        valid:true
      })
    }else{
      this.setState({
        searchText:this.state.searchText,
        disable:this.state.disable,
        valid:false
    })}
  }

  searchGenre = ()=>{
    this.checkInputValidate()
    if(!this.state.disable){
      axios
      .get(`https://recycling-vic-back-end.herokuapp.com/v1/api/search/${this.state.searchText}`)
      .then(res =>{
        const responseData = res.data;
        this.props.returnGenre(responseData)
      })
    }
  }

  render() {
    return (
      <div>
        <div class="wrapper">
          <div class="searchBar">
            <input id="searchQueryInput" type="text" name="searchQueryInput" placeholder="Enter waste's catagory or key word" value={this.state.searchText} onChange={this.updateInputValue}/>
            <button id="searchQuerySubmit" type="submit" name="searchQuerySubmit" onClick={this.searchGenre}>
              <svg style={{width:"24px", height:"24px"}} viewBox="0 0 24 24"><path fill="#666666" d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" />
              </svg>
            </button>
          </div>
        </div>
          <div class="invalid-feedback" style={{display: this.state.valid? "block":"none"}}>
            Please enter a valid text!
          </div>  
      </div>
    )
  }
}
