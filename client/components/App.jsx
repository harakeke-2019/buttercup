import React from 'react'
import {Route} from 'react-router-dom'
import Form from './Form'
import GoogleApiWrapper from './MapView'

const App = () => {
  return (
    <div>
      <Route Form path="/" component={Form} />
      <div className="col2">
        <Route path="/:lat/:lon" component={GoogleApiWrapper}/>
      </div>
    </div>
  )
}
export default App
