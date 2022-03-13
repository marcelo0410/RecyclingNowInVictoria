import React, { Component } from 'react'
import './style.css'


export default class searchresult extends Component {
    constructor(props){
        super(props)
        this.state={
            genreResult:""
        }
        console.log(props)
        this.photoPrefix = "https://github.com/zx0217/RecyclingNowInVictoriaIMG/blob/7726bbaf31e138e0839cdd5889f9b7ef9861c7c7/"
        this.photoPostfix = "_bin.png?raw=true"
        
    }

    checkBinColor(binId){
        switch(binId){
            case 1:
                return "red"
                break
            case 2:
                return "yellow"
                break
            case 3:
                return "blue"
                break
            case 4:
                return "green"
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
                                <h3 style={{fontSize:"20px"}}>{item.exampleName}</h3>
                                <p style={{fontSize:"12px"}}>{item.exampleIntro}</p>
                            </div>
                            <img style={{float:"right", width:"20%", height:"100%", paddingBottom:"10px", paddingLeft:"15px", paddingRight:"15px"}} src={this.photoPrefix+this.checkBinColor(item.binId)+this.photoPostfix}></img>
                        </li>
                    </ul>
                
              ))
          }
          </div>
    )
  }
}
