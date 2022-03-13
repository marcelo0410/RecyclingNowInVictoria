import React, { Component } from 'react'
import './style.css'


export default class searchresult extends Component {
    constructor(props){
        super(props)
        this.state={
            genreResult:""
        }
        console.log(props)
        
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
                        <li style={{display:"flex", height:"100px", borderBottom:"1px solid", justifyContent:"space-between"}}>
                            <img style={{float:"left", width:"30%", height:"100%"}} src={item.exampleLink}></img>
                            <div>
                            <p style={{fontSize:"12px"}}>{item.exampleName}</p>
                            <h3 style={{fontSize:"20px"}}>{item.exampleIntro}</h3>
                            </div>
                            <img style={{float:"right", width:"30%", height:"100%"}} src={this.props.result[0].exampleLink}></img>
                        </li>
                    </ul>
                
              ))
          }
          </div>
    //   </div>
    )
  }
}
