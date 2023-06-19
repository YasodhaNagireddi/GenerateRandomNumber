// Write your code here

import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {count: 0}

  getRandomNumber = () => {
    const num = Math.ceil(Math.random() * 100)
    this.setState({count: num})
  }

  render() {
    const {count} = this.state
    return (
      <div className="random-number-bg-container">
        <div className="random-number-card-container">
          <h1 className="random-number-heading">Random Number</h1>
          <p className="random-number-description">
            Generate a random number in the range of 0 to 100
          </p>
          <button
            type="button"
            className="random-number-button"
            onClick={this.getRandomNumber}
          >
            Generate
          </button>
          <p className="random-number-output">{count}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
