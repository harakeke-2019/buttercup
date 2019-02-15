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
    this.props.history.push(`/${event.target.value}`)
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
              <option value="/-36.994374/174.884119" >Confident</option>
              <option value="/-36.942972/174.46315">Relaxed</option>
              <option value="/-36.845177/174.768294">Naughty</option>
              <option value="/-36.844618/174.735628">Vocally Vegan</option>
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
