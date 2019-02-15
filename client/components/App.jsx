import React from 'react'
import {Route} from 'react-router-dom'
import Form from './Form'
import GoogleApiWrapper from './MapView'

const App = () => {
  let latitude = -36.994374
  let longitude = 174.884119
  return (
    <div>
      <Route Form path="/" component={Form} />
      <Route path="/" render={() => { return <div className="col2"> <GoogleApiWrapper latitude={latitude} longitude={longitude}/> </div> }}/>
    </div>
  )
}
export default App
