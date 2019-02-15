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
    this.props.history.push(`${event.target.value}`)
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
        <div className="mainWrapper">
          <div className="row">
            <div className="col1">
              <div>
                <h1 className="header">Mappily ever after</h1>
                <h2 className="title">
                ABOUT
                </h2>
                <p className="Paragraph">
                Are you feeling lost? Are you feeling confused with your life and emotions? Well boy oh boy do we have the answer for you! The Mappily Ever After Feelings map! For people who are searching for new perspectives to increase their mindfulness, and feel something new.</p>
                <br />
                <h2 className="title">HOW IT WORKS</h2>
                <p>Simply enter an emotion you wish to feel, and thousands of our tiny little happiness elves will work their magic to suggest the perfect place in your city to make you feel that way. Give it a go below!
                </p>
                <form className="dropdown" onSubmit={this.handleSubmit}>
                  <label>
                    <div className="button">
            Pick a feeling:
                    </div>
                    <div className="selection">
                      <select value={this.state.value} onChange={this.handleChange}>
                        <option value="/-36.994374/174.884119" >Confident</option>
                        <option value="/-36.942972/174.46315">Relaxed</option>
                        <option value="/-36.845177/174.768294">Naughty</option>
                        <option value="/-36.844618/174.735628">Visibly Vegan</option>
                      </select>
                      <input type="submit" value="Submit" onClick={this.state.value}/>
                    </div>
                  </label>
                </form>
              </div>
            </div>
            <div className="noRender">
              <img src={this.state.value} height="600" width="600"/>
              {this.renderRedirect()}
            </div>
          </div>
        </div>

      </React.Fragment>
    )
  }
}

export default Form
