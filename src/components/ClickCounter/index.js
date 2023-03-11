// // Write your code here
// import {Component} from 'react'
// import './index.css'

// class Counter extends Component {
//   render() {
//     return (
//       <div class="container">
//         <h1>The Button has been clicked {count} times</h1>
//         <p>Click the button to increase the count</p>
//         <button className="button">Click me</button>
//       </div>
//     )
//   }
// }

// Write your code here
import {Component} from 'react'

import './index.css'

class ClickCounter extends Component {
  state = {
    count: 0,
  }

  onIncrementCount = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state

    return (
      <div className="counter-container">
        <h1 className="counter-heading">
          The Button has been clicked
          <br /> <span className="counter-value">{count}</span> times
        </h1>
        <p className="description">Click the button to increase the count!</p>
        <div className="button-container">
          <button
            type="button"
            className="button"
            onClick={this.onIncrementCount}
          >
            Click Me!
          </button>
        </div>
      </div>
    )
  }
}

export default ClickCounter
