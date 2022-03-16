import React, { PureComponent } from 'react'
import LineChartVis from './Linechartvis'
import PieChartVis from './piechartvis'
import axios from 'axios'

export default class singlecouncilcanvas extends PureComponent {
  state = {
    councilOption:"",
    categoryOption:"",
    councilData:null
  }

  componentDidMount(){
    axios
    .get(`https://recycling-vic-back-end.herokuapp.com/v1/api/council/searchCouncil/5`)
    .then(res =>{
      const responseData = res.data;
      this.setState({
        councilOption:this.state.councilOption,
        categoryOption:this.state.categoryOption,
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
          <div style={{marginTop:"20px", textAlign:"left", marginLeft:"130px", fontSize:"17px", marginBottom:"10px"}}>Select council and category to see the trends...</div>
          <div style={{display:"flex", justifyContent:"space-evenly"}}>
            <select name="Council" id="council" onChange={this.updateCouncilAndCategory} value={this.state.councilOption}>
              <option value="" disabled>Council</option>
              <option value="5" selected>Bass Coast Shire Council</option>
              <option value="7">Bayside City Council</option>
              <option value="16">Corangamite Shire Council</option>
              <option value="20">Frankston City Council</option>
              <option value="79">Benalla Rural City Council</option>
            </select>
            <select name="Category" id="Category" onChange={this.updateCouncilAndCategory} value={this.state.categoryOption}>
              <option value="" disabled >Category</option>
              <option value="1" selected>General Waste</option>
              <option value="2">Garbage</option>
              <option value="3">Recycle</option>
              <option value="4">Organic</option>
            </select>
            <input type="submit" value={"confirm"} onClick={this.requestCouncilData}></input>
          </div>
          <div style={{display:"flex",justifyContent:"space-evenly", marginTop:"50px", flexWrap:"no-wrap"}}>
            <div>
              <h3>Council Location</h3>
              <img style={{width:"400px"}} src='https://github.com/zx0217/RecyclingNowInVictoriaIMG/blob/431992806e095bd58911998013ac4f73007bbef3/monash.jpg?raw=true'></img>
            </div>

            <div>
                <h3  className='mt-2 mb-2'>Local Council Kerbside Trends</h3>
                <LineChartVis councilId={this.state.councilOption} councilData={this.state.councilData} category={this.state.categoryOption}/>
            </div>
          </div>
          <div style={{display:"flex",justifyContent:"space-evenly", marginTop:"30px", marginBottom:"40px", flexWrap:"no-wrap"}}>
          <div>
              <h3>Recycle Service</h3>
              <div style={{display:"flex",justifyContent:"center", flexWrap:"wrap", width:"340px"}}>
                <div>
                  <img style={{width:"170px"}} src='https://github.com/zx0217/RecyclingNowInVictoriaIMG/blob/431992806e095bd58911998013ac4f73007bbef3/recyclebin/garbage1.png?raw=true'></img>
                </div>
                <div>
                  <img style={{width:"170px"}} src='https://github.com/zx0217/RecyclingNowInVictoriaIMG/blob/431992806e095bd58911998013ac4f73007bbef3/recyclebin/recycle1.png?raw=true'></img>
                </div>
                <div>
                  <img style={{width:"170px"}} src='https://github.com/zx0217/RecyclingNowInVictoriaIMG/blob/431992806e095bd58911998013ac4f73007bbef3/recyclebin/organics1.png?raw=true'></img>
                </div>
                <div>
                  <img style={{width:"170px"}} src='https://github.com/zx0217/RecyclingNowInVictoriaIMG/blob/431992806e095bd58911998013ac4f73007bbef3/recyclebin/glass1.png?raw=true'></img>
                </div>
              </div>
            </div>
            <div>
              <h3 className='mt-2'>Recycle and Waste</h3>
              <PieChartVis councilId={this.state.councilOption}/>
            </div>
          </div>
      </div>
    )
  }
}
