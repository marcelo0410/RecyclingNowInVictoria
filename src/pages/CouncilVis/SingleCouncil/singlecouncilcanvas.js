import React, { PureComponent } from 'react'
import LineChartVis from './Linechartvis'
import PieChartVis from './piechartvis'
import axios from 'axios'
import '../../../pages/style.css'

export default class singlecouncilcanvas extends PureComponent {
  state = {
    councilOption:"",
    categoryOption:"",
    councilData:null
  }


  generateCouncilImgUrl = () =>{
    console.log(typeof(this.state.councilOption))
    switch(this.state.councilOption){
      case "39":
        return "https://github.com/zx0217/RecyclingNowInVictoriaIMG/blob/main/macedonranges.jpg?raw=true"
        break
      case "7":
        return "https://github.com/zx0217/RecyclingNowInVictoriaIMG/blob/main/bayside.jpg?raw=true"
        break
      case "16":
        return "https://github.com/zx0217/RecyclingNowInVictoriaIMG/blob/main/corangamite.jpg?raw=true"
        break
      case "24":
        return "https://github.com/zx0217/RecyclingNowInVictoriaIMG/blob/main/goldenplains.jpg?raw=true"
        break
      case "79":
        return "https://github.com/zx0217/RecyclingNowInVictoriaIMG/blob/main/benalla.jpg?raw=true"
        break
    }
  }

  generateProvideService = () =>{
    switch(this.state.councilOption){
      // 4
      case "39":
        return "https://github.com/zx0217/RecyclingNowInVictoriaIMG/blob/3d404ed739f2e74576b9d87e7cdedfd3105adddf/Bins/all-bins.jpg?raw=true"
        break
      // 3
      case "7":
      case "16":
      case "79":
        return "https://github.com/zx0217/RecyclingNowInVictoriaIMG/blob/3d404ed739f2e74576b9d87e7cdedfd3105adddf/Bins/no-glass.jpg?raw=true"
        break
      // 2
      case "24":
        return "https://github.com/zx0217/RecyclingNowInVictoriaIMG/blob/3d404ed739f2e74576b9d87e7cdedfd3105adddf/Bins/no-recycle-glass.jpg?raw=true"
        break
    }
  }

  componentDidMount(){
    axios
    .get(`https://recycling-vic-back-end.herokuapp.com/v1/api/council/searchCouncil/39`)
    .then(res =>{
      const responseData = res.data;
      this.setState({
        councilOption:"39",
        categoryOption:"1",
        councilData:responseData
      })
    })
  }

  updateCouncilAndCategory = (evt) =>{
    if(parseInt(evt.target.value) < 5){
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
    })
  }


  render() {
    return (
      <div>
          <h2 className='mt-4'>Getting to know your council</h2>
          <div style={{marginTop:"20px", textAlign:"left", marginLeft:"144px", fontSize:"17px", marginBottom:"10px"}}>Select council and category to see the trends...</div>
          <div style={{display:"flex", justifyContent:"space-evenly"}}>
            <div>
              
                <select name="Council" id="council" onChange={this.updateCouncilAndCategory} value={this.state.councilOption}>
                  <option value="" disabled>Council</option>
                  <option value="39" selected>Macedon Ranges Shire Council</option>
                  <option value="7">Bayside City Council</option>
                  <option value="16">Corangamite Shire Council</option>
                  <option value="24">Golden Plains Shire Council</option>
                  <option value="79">Benalla Rural City Council</option>
                </select>
              
              <input type="submit" className='btn-council btn-council-clicked' value={"Search council"} onClick={this.requestCouncilData}></input>
            </div>

            
            <select name="Category" id="Category" onChange={this.updateCouncilAndCategory} value={this.state.categoryOption}>
              <option value="" disabled >Category</option>
              <option value="1" selected>General Waste</option>
              <option value="2">Garbage</option>
              <option value="3">Recycle</option>
              <option value="4">Organic</option>
            </select>
            
          </div>
          <div style={{display:"flex",justifyContent:"space-evenly", marginTop:"30px", flexWrap:"no-wrap"}}>
            <div >
              <h3>Council Location</h3>
              <img style={{width:"400px", marginTop:"60px"}} src={this.generateCouncilImgUrl()}></img>
            </div>

            <div>
                <h3  className=''>Local Council Kerbside Trends</h3>
                <p style={{fontSize:"13px", paddingLeft:"40px", textAlign:"left",width:"400px"}}>The plot reflects the trend of kerbside in the council while purple line represents the total volume of kerbside collection and green line represents total volume of kerbside processed. Total processed data doesn't represent total recycled volume.</p>
                <LineChartVis councilId={this.state.councilOption} councilData={this.state.councilData} category={this.state.categoryOption}/>
            </div>
          </div>
          <div style={{display:"flex",justifyContent:"space-evenly", marginTop:"30px", marginBottom:"40px", flexWrap:"no-wrap"}}>
            <div>
              <h3>Recycle Service</h3>
              <p style={{fontSize:"13px", paddingLeft:"0px", textAlign:"left",width:"400px"}}>Recycle services differs in different councils. The picture below represents the type of bins which exist in the corresponding council. The information is for reference only.</p>
              <div style={{display:"flex",justifyContent:"center", flexWrap:"wrap", width:"340px"}}>
                <div>
                  <img style={{width:"340px", marginTop:'25px'}} src={this.generateProvideService()}></img>
                </div>
              </div>
            </div>
            <div>
              <h3 className=''>Diversion rate</h3>
              <p style={{fontSize:"13px", paddingLeft:"10px", textAlign:"left",width:"400px"}}>Diversion rates measure (usually by weight) the portion of waste not sent to the landfill. Tracking your diversion rate over time is a great way to measure of the effectiveness of reuse, recycling, and organic composting programs.</p>
              <PieChartVis councilId={this.state.councilOption}/>
            </div>
          </div>
      </div>
    )
  }
}
