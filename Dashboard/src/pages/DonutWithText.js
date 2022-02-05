import React, { Component } from 'react'
import Chart from 'react-google-charts'
const pieData = [
  ['Task', 'Hours per Day'],
  ['Work', 11],
  ['Eat', 2],
  ['Commute', 2],
  ['Watch TV', 2],
  ['Sleep', 7],
]
const pieOptions = {
  pieHole: 0.9,
}
class DonutWithText extends Component {
  render() {
    return (
    
        <Chart
          height={'30vh'}
          chartType="PieChart"
          loader={<div>Loading Chart</div>}
          data={pieData}
          options={pieOptions}
          rootProps={{ 'data-testid': '3' }}
        />
   
    )
  }
}
export default DonutWithText