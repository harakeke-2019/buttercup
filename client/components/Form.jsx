import React from 'react'

class Form extends React.Component {
  constructor (props){
    super(props)
  this.state = {
    value:'confident'
  }
  this.handleChange=this.handleChange.bind(this)
  this.handleSumbit=this.handleSubmit.bind(this)
}

onConfidentClick {
  this.setState ({
    confident:true
  })

}

  render () {
    return (
      <div>
        <h2>This is form</h2>
        <form>
          <label>
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="confident">Confident</option>
            <option value="relaxed">Relaxed</option>
            <option value="naughty">Naughty</option>
          </select>
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>

      <div className="map">
      </div>

    )
  }
}

export default Form
