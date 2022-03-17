import React, { Component } from 'react'
import BarPlotVis from './barplotvis'
import BarPlotVisWithPadding from './barplotviswithpad'
import StackedPlotVis from './stackedplotvis'

export default class overallcanvas extends Component {
  render() {
    return (
      <div>
        <div style={{display:"flex",justifyContent:"space-evenly", marginTop:"50px", flexWrap:"no-wrap"}}>
            <div>
              <h3>Nuggests</h3>
              <p>This is a chart for general waste volumes of those 7 councils in 2019123. </p>
              <BarPlotVisWithPadding/>
            </div>

            <div>
                <h3  className=''>Big Mac</h3>
                <p style={{marginLeft:"10px"}}>This is a chart for general waste volumes of those 7 councils in 2019. </p>
                <BarPlotVisWithPadding/>
            </div>

          </div>
          <div style={{display:"flex",justifyContent:"space-evenly", marginTop:"50px", flexWrap:"no-wrap"}}>
            <div>
                <h3  className='mt-2 mb-2'>Hamburger Happy Meal</h3>
                <p>This is a chart for general waste volumes of those 7 councils in 2019. </p>
                <StackedPlotVis/>
            </div>
          </div>
        
      </div>
      
    )
  }
}
