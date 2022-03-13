import React, { PureComponent } from 'react'
import LineChartVis from './Linechartvis'
import DountChartVis from './donutchartvis'
import axios from 'axios'

export default class councilvis extends PureComponent {
  state = {
    councilOption:"",
    categoryOption:"",
    councilData:null
  }

  componentDidMount(){
    axios
    .get(`https://recycling-vic-back-end.herokuapp.com/v1/api/council/searchCouncil/43`)
    .then(res =>{
      const responseData = res.data;
      this.setState({
        councilOption:this.state.councilOption,
        categoryOption:"1",
        councilData:responseData
      })
      console.log("Data",this.state.councilData)
    })
  }

  updateCouncilAndCategory = (evt) =>{
    console.log(evt.target.value)
    if(parseInt(evt.target.value) < 6){
      this.setState({
        councilOption:this.state.councilOption,
        categoryOption:evt.target.value,
        councilData:this.state.councilData
      })
    } else{
      this.setState({
        councilOption:evt.target.value,
        categoryOption:this.state.categoryOption,
        councilData:this.state.councilData
      })
    }

  }

  // http://localhost:8080
  // https://recycling-vic-back-end.herokuapp.com
  requestCouncilData = () =>{
    axios
    .get(`https://recycling-vic-back-end.herokuapp.com/v1/api/council/searchCouncil/${this.state.councilOption}`)
    .then(res =>{
      const responseData = res.data;
      this.setState({
        councilOption:this.state.councilOption,
        categoryOption:this.state.categoryOption,
        councilData:responseData
      })
      console.log("Data",this.state.councilData)
    })
  }


  render() {
    return (
      <div>
          <h2 className='mt-5 mb-5'>Getting to know your council</h2>
          <div style={{display:"flex", justifyContent:"space-evenly"}}>
            <select name="Council" id="council" onChange={this.updateCouncilAndCategory} value={this.state.councilOption}>
              <option value="" disabled selected>Council</option>
              <option value="43">Melbourne City Council</option>
              <option value="52">Mornington Peninsula Shire Council</option>
              <option value="73">Whittlesea City Council</option>
              <option value="77">Yarra Ranges Shire Council</option>
            </select>
            <select name="Category" id="Category" onChange={this.updateCouncilAndCategory} value={this.state.categoryOption}>
              <option value="" disabled selected>Category</option>
              <option value="1">General Waste</option>
              <option value="2">Garbage</option>
              <option value="3">Recycle</option>
              <option value="4">Organic</option>
            </select>
            <input type="submit" value={"confirm"} onClick={this.requestCouncilData}></input>
          </div>
          <div style={{display:"flex",justifyContent:"center", marginTop:"50px"}}>
            <div>
              <LineChartVis councilId={this.state.councilOption} councilData={this.state.councilData} category={this.state.categoryOption}/>
            </div>
            <div>
              <DountChartVis/>
            </div>
          </div>
      </div>
    )
  }
}
