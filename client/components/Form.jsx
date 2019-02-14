import React from 'react'

// const mapPng = ''

class Form extends React.Component {
  constructor (props) {
    super(props)
    this.state = {value: 'https://upload.wikimedia.org/wikipedia/commons/3/3b/World_Map_1689.JPG'}

    // this.handleChange = this.handleChange.bind(this)
    // this.handleSumbit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange (event) {
    this.setState({value: event.target.value})
  }

  handleSubmit (event) {
    <img src={this.state.value}/>
    event.preventDefault()
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
            Pick a feeling:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="confident">Confident</option>
            <option value="relaxed">Relaxed</option>
            <option value="naughty">Naughty</option>
            <option value="vegan">Vocally Vegan</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

export default Form
