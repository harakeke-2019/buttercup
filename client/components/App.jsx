import React from 'react'
import {Route} from 'react-router-dom'
import Form from './Form'
import GoogleApiWrapper from './MapView'

const App = () => {
  return (
    <div>
      <h1>Feeling Map</h1>
      <Route Form exact path="/" component={Form} />
      <Route Form path="/map" component={GoogleApiWrapper} />
    </div>
  )
}
export default App
