import React from 'react'
import { XYPlot, VerticalBarSeries, VerticalGridLines, HorizontalGridLines, XAxis, YAxis } from 'react-vis'

const Bar = ({ height, width, data }) => {
  return (
    <XYPlot height={height} width={width}>
      <VerticalGridLines />
      <HorizontalGridLines />
      <XAxis />
      <YAxis />
      <VerticalBarSeries data={data} />
    </XYPlot>
  )
}

export default Bar
