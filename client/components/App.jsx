import React from 'react'
import {Route} from 'react-router-dom'
import Form from './Form'
import GoogleApiWrapper from './MapView'


const App = () => {

let latitude = 40.7128
let longitude = -74.0060
  return (
    <div>
      <h1>Feeling Map</h1>
      <Route Form path="/" component={Form} />
      <Route path="/" render={() => { return <GoogleApiWrapper latitude={latitude} longitude={longitude}/> }}/>
    </div>
  )
}
export default App
