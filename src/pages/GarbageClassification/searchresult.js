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
    componentDidMount(){
        // this.checkGenre()
    }

    componentDidUpdate(prevProps){
        // if(JSON.stringify(this.props.result) !== JSON.stringify(prevProps.result)){
        //     this.checkGenre()
        // }
    }

    checkGenre(){
        // switch(this.props.result[0].genre){
        //     case 1:
        //         this.setState({
        //             genreResult:"green"
        //         })
        //         break
        //     case 2:
        //         this.setState({
        //             genreResult:"yellow"
        //         })
        //         break
        // }
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
            case 1:
                return "green"
                break
        }

    }

  render() {
    return (
    //   <div style={{textAlign: "center", marginTop:"30px"}}>
    //       <ul style={{width:"800px", listStyleType: "none", display:"inline-block"}}>
    //           <li style={{display:"flex", height:"100px", borderBottom:"1px solid", justifyContent:"space-between"}}>
    //               <img style={{float:"left", width:"30%", height:"100%"}} src={this.props.result[0].exampleLink}></img>
    //               <div>
    //                 <p style={{fontSize:"12px"}}>title</p>
    //                 <h3 style={{fontSize:"20px"}}>desc</h3>
    //               </div>
    //               <img style={{float:"right", width:"30%", height:"100%"}} src={this.props.result[0].exampleLink}></img>
    //           </li>
    //       </ul>
          <div style={{textAlign: "center", marginTop:"30px"}}>
          {
              
              this.props.result.map((item, index)=>(
                    <ul style={{width:"800px", listStyleType: "none", display:"inline-block"}}>
                        <li style={{display:"flex", height:"100px", borderBottom:"1px solid #CFCFCF", justifyContent:"space-between"}}>
                            <img style={{float:"left", width:"18%", height:"100%", paddingBottom:"10px", paddingLeft:"15px"}} src={item.exampleLink}></img>
                            <div style={{fontSize:"20px", textAlign:"left", paddingLeft:"10px", marginTop:"8px"}}>
                                <h3 style={{fontSize:"20px"}}>{item.exampleName}</h3>
                                <p style={{fontSize:"12px"}}>{item.exampleIntro}</p>
                            </div>
                            <img style={{float:"right", width:"20%", height:"100%", paddingBottom:"10px", paddingLeft:"15px", paddingRight:"15px"}} src={this.photoPrefix+this.checkBinColor(item.binId)+this.photoPostfix}></img>
                        </li>
                    </ul>
                
              ))
          }
          </div>
    //   </div>
    )
  }
}
