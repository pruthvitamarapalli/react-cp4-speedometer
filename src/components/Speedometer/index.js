import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  state = {count: 0}

  onAcceleration = () => {
    this.setState(prevState =>
      prevState.count < 200 ? {count: prevState.count + 10} : {count: 200},
    )
  }

  onBreak = () => {
    this.setState(prevState =>
      prevState.count > 0 ? {count: prevState.count - 10} : {count: 0},
    )
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1 className="heading"> SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
          className="image"
        />
        <h2 className="speed">
          Speed is
          <span> {count}mph </span>
        </h2>
        <p className="description"> Min Limit is 0mph, Max Limit is 200mph </p>
        <div>
          <button className="button accelerate" onClick={this.onAcceleration}>
            Accelerate
          </button>
          <button className="button break" onClick={this.onBreak}>
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
