import React from 'react'
import {Route} from 'react-router-dom'
import Form from './Form'

const App = () => {
  return (
    <div>
      <h1>Feeling Map</h1>
      <Route Form path="/" component={Form} />
    </div>
  )
}

export default App
