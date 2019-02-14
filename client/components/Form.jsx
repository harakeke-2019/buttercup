import React from 'react'

class Form extends React.Component {
  state = {
    confident:false,
    relaxed: false,
    naughty:false
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
          <select name="feelings">
            <option value="confident" onClick={this.onConfidentClick}>Confident</option>
            <option value="relaxed">Relaxed</option>
            <option value="naughty">Naughty</option>
          </select>
          <br/>
          {/* <input type="submit">Submit</input> */}
        </form>
      </div>

      <div className="map">
      </div>

    )
  }
}

export default Form
