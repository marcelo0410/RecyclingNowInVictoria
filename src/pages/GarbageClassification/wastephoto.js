import React, { Component } from 'react'

export default class wastemouseenter extends Component {

    state={
      photoArray: [ 
        {
          id:1,
          title:'plasticbottle',
          imageUrl:'https://github.com/zx0217/RecyclingNowInVictoriaIMG/blob/eee05eeb9ea6665b81a55d7ab4b0db13fdfb5eb9/wastephoto/plastic-bottles.jpeg?raw=true',
          genre:'https://github.com/zx0217/RecyclingNowInVictoriaIMG/blob/eee05eeb9ea6665b81a55d7ab4b0db13fdfb5eb9/recyclebin/recycle1.png?raw=true',
          disable:true
        },
        {
          id:2,
          title:'glassbottle',
          imageUrl:'https://github.com/zx0217/RecyclingNowInVictoriaIMG/blob/eee05eeb9ea6665b81a55d7ab4b0db13fdfb5eb9/wastephoto/glass-bottle.jpeg?raw=true',
          genre:'https://github.com/zx0217/RecyclingNowInVictoriaIMG/blob/eee05eeb9ea6665b81a55d7ab4b0db13fdfb5eb9/recyclebin/glass1.png?raw=true',
          disable:true
        },
        {
          id:3,
          title:'magazines',
          imageUrl:'https://github.com/zx0217/RecyclingNowInVictoriaIMG/blob/eee05eeb9ea6665b81a55d7ab4b0db13fdfb5eb9/wastephoto/magazines.jpeg?raw=true?raw=true',
          genre:'https://github.com/zx0217/RecyclingNowInVictoriaIMG/blob/eee05eeb9ea6665b81a55d7ab4b0db13fdfb5eb9/recyclebin/recycle1.png?raw=true',
          disable:true
        },
        {
          id:4,
          title:'papercups',
          imageUrl:'https://github.com/zx0217/RecyclingNowInVictoriaIMG/blob/eee05eeb9ea6665b81a55d7ab4b0db13fdfb5eb9/wastephoto/paper-cups.jpeg?raw=true',
          genre:'https://github.com/zx0217/RecyclingNowInVictoriaIMG/blob/eee05eeb9ea6665b81a55d7ab4b0db13fdfb5eb9/recyclebin/recycle1.png?raw=true',
          disable:true
        },
        {
          id:5,
          title:'aluminumcans',
          imageUrl:'https://github.com/zx0217/RecyclingNowInVictoriaIMG/blob/eee05eeb9ea6665b81a55d7ab4b0db13fdfb5eb9/wastephoto/aluminum-can.jpeg?raw=true',
          genre:'https://github.com/zx0217/RecyclingNowInVictoriaIMG/blob/eee05eeb9ea6665b81a55d7ab4b0db13fdfb5eb9/recyclebin/recycle1.png?raw=true',
          disable:true
        },
        {
          id:6,
          title:'fruitpeels',
          imageUrl:'https://github.com/zx0217/RecyclingNowInVictoriaIMG/blob/eee05eeb9ea6665b81a55d7ab4b0db13fdfb5eb9/wastephoto/fruit-peels.jpeg?raw=true',
          genre:'https://github.com/zx0217/RecyclingNowInVictoriaIMG/blob/eee05eeb9ea6665b81a55d7ab4b0db13fdfb5eb9/recyclebin/organics1.png?raw=true',
          disable:true
        },
        {
          id:7,
          title:'polystyrene',
          imageUrl:'https://github.com/zx0217/RecyclingNowInVictoriaIMG/blob/eee05eeb9ea6665b81a55d7ab4b0db13fdfb5eb9/wastephoto/polystyrene.jpg?raw=true',
          genre:'https://github.com/zx0217/RecyclingNowInVictoriaIMG/blob/eee05eeb9ea6665b81a55d7ab4b0db13fdfb5eb9/recyclebin/garbage1.png?raw=true',
          disable:true
        },
        {
          id:8,
          title:'cardboard',
          imageUrl:'https://github.com/zx0217/RecyclingNowInVictoriaIMG/blob/eee05eeb9ea6665b81a55d7ab4b0db13fdfb5eb9/wastephoto/cardboard.jpeg?raw=true',
          genre:'https://github.com/zx0217/RecyclingNowInVictoriaIMG/blob/eee05eeb9ea6665b81a55d7ab4b0db13fdfb5eb9/recyclebin/recycle1.png?raw=true',
          disable:true
        },
        {
          id:9,
          title:'plasticbags',
          imageUrl:'https://github.com/zx0217/RecyclingNowInVictoriaIMG/blob/eee05eeb9ea6665b81a55d7ab4b0db13fdfb5eb9/wastephoto/plastic-bags.jpg?raw=true',
          genre:'https://github.com/zx0217/RecyclingNowInVictoriaIMG/blob/eee05eeb9ea6665b81a55d7ab4b0db13fdfb5eb9/recyclebin/garbage1.png?raw=true',
          disable:true
        },
        {
          id:10,
          title:'plasticwrap',
          imageUrl:'https://github.com/zx0217/RecyclingNowInVictoriaIMG/blob/eee05eeb9ea6665b81a55d7ab4b0db13fdfb5eb9/wastephoto/plastic-wrap.jpg?raw=true',
          genre:'https://github.com/zx0217/RecyclingNowInVictoriaIMG/blob/eee05eeb9ea6665b81a55d7ab4b0db13fdfb5eb9/recyclebin/garbage1.png?raw=true',
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

  render() {
    return (
      <div>
          <div className='mt-4' style={{textAlign:"left", fontSize:"20px", marginLeft:"40px", fontWeight:"bold"}}>Common search</div>
          <div style={{textAlign:"left", marginLeft:"40px", fontSize:"15px", marginBottom:"5px"}}>Click on pictures to see which type of rubbish the item is... </div>
          <div style={{display:"flex", justifyContent:"center", flexWrap:"wrap", width:"900px", marginLeft:"35px", marginBottom:"30px"}}>
              {
                this.state.photoArray.map((item, index) =>(
                  <div key={item.id}>
                    <img 
                      src={item.disable? (item.imageUrl):(item.genre)}
                      className=""
                      style={{width:"180px", height:"180px"}}
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
