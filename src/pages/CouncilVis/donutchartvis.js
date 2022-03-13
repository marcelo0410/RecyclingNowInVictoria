import React, { Component } from 'react'

import {RadialChart, Hint} from 'react-vis';
export default class donutchartvis extends Component {
    state = {
        value: false
      };
      render() {
        const {value} = this.state;
        return (
          <RadialChart
            className={'donut-chart-example'}
            innerRadius={100}
            radius={140}
            getAngle={d => d.theta}
            data={[
              {theta: 2, className: 'custom-class'},
              {theta: 6},
              {theta: 2},
              {theta: 3},
              {theta: 1}
            ]}
            onValueMouseOver={v => this.setState({value: v})}
            onSeriesMouseOut={() => this.setState({value: false})}
            width={300}
            height={300}
            padAngle={0.04}
          >
            {value !== false && <Hint value={value} />}
          </RadialChart>
        );
      }
}
