import React, { Component } from 'react'
import BarPlotVis from './barplotvis'
import BarPlotVisWithPadding from './barplotviswithpad'
import StackedPlotVis from './stackedplotvis'

export default class overallcanvas extends Component {
  render() {
    return (
      <div>
        <BarPlotVis/>
        <BarPlotVisWithPadding/>
        <StackedPlotVis/>
      </div>
    )
  }
}
