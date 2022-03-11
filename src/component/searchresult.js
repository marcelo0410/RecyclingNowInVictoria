import React, { Component } from 'react'

export default class searchresult extends Component {
    constructor(props){
        super(props)
        this.state={
            genreResult:""
        }
        console.log(1, this)
    }
    componentDidMount(){
        console.log(2, this)
        this.checkGenre()
    }
    checkGenre(){
        console.log(3, this)
        switch(this.props.result[0].genre){
            case 1:
                this.setState({
                    genreResult:"green"
                })
                console.log(4, this)
                break
            case 2:
                this.setState({
                    genreResult:"yellow"
                })
                break
        }
    }

  render() {
    return (
      <div>
          {this.state.genreResult? <img src={require(`./images/recyclebin/${this.state.genreResult}bin.jpg`)} style={{width:"200px", marginTop:"3em"}}></img>: null}
      </div>
    )
  }
}
