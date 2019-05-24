import React from 'react'
import ReactDOM from 'react-dom'
import '../node_modules/react-vis/dist/style.css'
import Line from './Line'
import Bar from './Bar'
import Pie from './Pie'

import './index.css'

const App = () => {
  const data = [
    { x: 0, y: 8 },
    { x: 1, y: 5 },
    { x: 2, y: 4 },
    { x: 3, y: 9 },
    { x: 4, y: 1 },
    { x: 5, y: 7 },
    { x: 6, y: 6 },
    { x: 7, y: 3 },
    { x: 8, y: 2 },
    { x: 9, y: 0 }
  ]

  return (
    <div className='App'>
      <Line height={300} width={300} data={data} />
      <Bar height={300} width={300} data={data} />
      <Pie height={300} width={300} data={data} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
