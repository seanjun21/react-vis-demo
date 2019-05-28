import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import '../node_modules/react-vis/dist/style.css'
import Line from './Line'
import Bar from './Bar'
import Pie from './Pie'

import './index.css'

const App = () => {
  const generateData = (value, length = 5) => {
    const data = []

    for (let i = 0; i < length; i++) {
      data.push({
        x: i,
        y: Math.random() * 100
      })
    }

    return data
  }

  const [data, setData] = useState(generateData())

  const changeData = () => {
    setData(generateData())
  }

  return (
    <div className='App'>
      <div>
        <button onClick={changeData}>Transform</button>
      </div>
      <Line height={300} width={300} data={data} />
      <Bar height={300} width={300} data={data} />
      <Pie height={300} width={300} data={data} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
