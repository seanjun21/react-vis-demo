import React from 'react'
import { XYPlot, LineSeries, VerticalGridLines, HorizontalGridLines, XAxis, YAxis } from 'react-vis'

const Line = ({ height, width, data }) => {
  return (
    <XYPlot height={height} width={width}>
      <VerticalGridLines />
      <HorizontalGridLines />
      <XAxis />
      <YAxis />
      <LineSeries data={data} />
    </XYPlot>
  )
}

export default Line
