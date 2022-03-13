import React, { Component } from 'react'
import ybin from '../../assets/images/recyclebin/yellowbin.png'
import p1 from '../../assets/images/wastephoto/plasticbottle/plasticbottle1.jpg'

export default class wastemouseenter extends Component {

    state={
      photoArray: [ 
        {
          id:1,
          title:'paper',
          imageUrl:'wastephoto/plasticbottle/plasticbottle1.jpg',
          genre:'recyclebin/yellowbin.png',
          disable:true
        },
        {
          id:2,
          title:'paper',
          imageUrl:'wastephoto/plasticbottle/plasticbottle1.jpg',
          genre:'recyclebin/yellowbin.png',
          disable:true
        },
        {
          id:3,
          title:'paper',
          imageUrl:'wastephoto/plasticbottle/plasticbottle1.jpg',
          genre:'recyclebin/yellowbin.png',
          disable:true
        },
        {
          id:4,
          title:'paper',
          imageUrl:'wastephoto/plasticbottle/plasticbottle1.jpg',
          genre:'recyclebin/yellowbin.png',
          disable:true
        },
        {
          id:5,
          title:'paper',
          imageUrl:'wastephoto/plasticbottle/plasticbottle1.jpg',
          genre:'recyclebin/yellowbin.png',
          disable:true
        }
      ]
    }

    

    renderPhoto(item){
      const tempArray = this.state.photoArray
      tempArray[item.id-1]["disable"] = !tempArray[item.id-1]["disable"]
      this.setState({
        photoArray:tempArray
      })
    }

    handleMouseEnter = ()=>{
        this.setState({
            img:ybin
        })

    }

    handleMouseOut = () =>{
        this.setState({
            img:p1
        })
    }
  render() {
    return (
      <div>
          <div className='mt-5 mb-2'>Common genre of garbage</div>
          <div style={{display:"flex", justifyContent:"center", flexWrap:"wrap", width:"900px"}}>
              {
                this.state.photoArray.map((item, index) =>(
                  <div key={item.id}>
                    <img 
                      src={item.disable? (require('../../assets/images/' + item.imageUrl)):(require('../../assets/images/' + item.genre))}
                      className=""
                      style={{width:"180px", height:"100px"}}
                      alt={item.title}
                      id={item.id}
                      onClick={()=>{
                        this.renderPhoto(item)
                      }}
                      />
                  </div>
                ))
              }
          </div>
      </div>
    )
  }
}
