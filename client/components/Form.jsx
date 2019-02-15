import React from 'react'
import {Redirect} from 'react-router-dom'

// const mapPng = ''
const imgData = {
  maps: 'https://upload.wikimedia.org/wikipedia/commons/3/3b/World_Map_1689.JPG',
  cow: 'https://upload.wikimedia.org/wikipedia/commons/d/d4/CH_cow_2_cropped.jpg'
}

class Form extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      value: imgData.maps,
      redirect: false
    }
    // this.handleChange = this.handleChange.bind(this)
    // this.handleSumbit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  renderRedirect () {
    if (this.state.redirect) {
      return <Redirect to='/map' />
    }
  }

  handleChange (event) {
    this.setState({value: event.target.value})
  }

  handleSubmit (event) {
    this.setState({
      redirect: true
    })
    event.preventDefault()
  }

  render () {
    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          <label>
            Pick a feeling:
            <select value={this.state.value} onChange={this.handleChange}>
              <option value={imgData.maps}>Confident</option>
              <option value={imgData.cow}>Relaxed</option>
              <option value="naughty">Naughty</option>
              <option value="vegan">Vocally Vegan</option>
            </select>
          </label>
          <input type="submit" value="Submit" />
        </form>
        <img src={this.state.value} height="600" width="600"/>
        {this.renderRedirect()}
      </React.Fragment>
    )
  }
}

export default Form
