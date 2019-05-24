import React from 'react'
import { RadialChart } from 'react-vis'

const Pie = ({ height, width, data }) => {
  const newData = data.map(index => ({ angle: index.y }))

  return (
    <RadialChart data={newData} height={height} width={width} />
  )
}

export default Pie
