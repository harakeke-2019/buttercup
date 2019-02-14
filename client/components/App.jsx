import React from 'react'
import {Route} from 'react-router-dom'
import Form from './Form'
import GoogleApiWrapper from './MapView'

const App = () => {
  return (
    <div>
      <h1>React development has begun!</h1>
      {/* <Route Form path="/" component={Form} /> */}
      <Route Form path="/map" component={GoogleApiWrapper} />
    </div>
  )
}
export default App
