import React, { Component } from 'react'
import './style.css'


export default class searchresult extends Component {
    constructor(props){
        super(props)
        this.state={
            genreResult:""
        }
        this.photoPrefix = "https://github.com/zx0217/RecyclingNowInVictoriaIMG/blob/25282155e9f8f49de5c47874cc861698916fd999/Bins/"
        this.photoPostfix = ".png?raw=true"
    }

    checkBinColor(binId){
        switch(binId){
            // red
            case 1:
                return "garbage1"
                break
            // yellow
            case 2:
                return "recycle1"
                break
            // blue
            case 3:
                return "glass1"
                break
            case 4:
                return "organics1"
                break
        }

    }

  render() {
    return (
          <div style={{textAlign: "center", marginTop:"30px"}}>
          {
              
              this.props.result.map((item, index)=>(
                    <ul style={{width:"800px", listStyleType: "none", display:"inline-block"}}>
                        <li style={{display:"flex", height:"100px", borderBottom:"1px solid #CFCFCF", justifyContent:"space-between"}}>
                            <img style={{float:"left", width:"18%", height:"100%", paddingBottom:"10px", paddingLeft:"15px"}} src={item.exampleLink}></img>
                            <div style={{fontSize:"20px", textAlign:"left", marginTop:"8px", width:"57%"}}>
                                <h3 style={{fontSize:"20px"}}>{item.exampleName.charAt(0).toUpperCase()+item.exampleName.slice(1)}</h3>
                                <p style={{fontSize:"12px"}}>{item.exampleIntro}</p>
                            </div>
                            <img style={{float:"right", width:"130px", height:"100%", paddingBottom:"10px", paddingLeft:"15px", paddingRight:"15px"}} src={this.photoPrefix+this.checkBinColor(item.binId)+this.photoPostfix}></img>
                        </li>
                    </ul>
                
              ))
          }
          </div>
    )
  }
}
