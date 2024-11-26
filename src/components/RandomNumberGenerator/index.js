// Write your code here
import {Component} from 'react'
import './index.css'

class RandomNumber extends Component {
  state = {
    count: 0,
  }
  getRandomNumber = () => Math.ceil(Math.random() * 100)
  onButton = () => {
    const randomNumber = this.getRandomNumber()

    this.setState(prevState => ({count: prevState.count + randomNumber}))
  }
  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <div className="cart-container">
          <div>
            <h1 className="heading">Random Number</h1>
            <p className="para">
              Generate a random number in the range of 0 to 100
            </p>
            <button onClick={this.onButton} type="button" className="btn-1">
              Generate
            </button>
            <p className="para-1">{count}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default RandomNumber
