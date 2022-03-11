import React, { Component } from 'react'


export default class searchresult extends Component {
    constructor(props){
        super(props)
        this.state={
            genreResult:""
        }
        
    }
    componentDidMount(){
        this.checkGenre()
    }

    componentDidUpdate(prevProps){
        if(JSON.stringify(this.props.result) !== JSON.stringify(prevProps.result)){
            this.checkGenre()
        }
    }

    checkGenre(){
        switch(this.props.result[0].genre){
            case 1:
                this.setState({
                    genreResult:"green"
                })
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
          {this.state.genreResult? <img src={require(`../../assets/images/recyclebin/${this.state.genreResult}bin.jpg`)} style={{width:"200px", marginTop:"3em"}}></img>: null}
      </div>
    )
  }
}
