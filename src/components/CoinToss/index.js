import {Component} from 'react'

import './index.css'

class CoinToss extends Component {
  state = {
    tossCount: 0,
    headsCount: 0,
    tailsCount: 0,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
  }

  onCoinTossed = () => {
    const tossResult = Math.floor(Math.random() * 2)
    console.log(tossResult)
    this.setState(prevState => ({tossCount: prevState.tossCount + 1}))
    if (tossResult === 0) {
      this.setState({
        imageUrl: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
      })
      this.setState(prevState => ({
        headsCount: prevState.headsCount + 1,
      }))
    } else {
      this.setState({
        imageUrl: 'https://assets.ccbp.in/frontend/react-js/tails-img.png',
      })
      this.setState(prevState => ({
        tailsCount: prevState.tailsCount + 1,
      }))
    }
  }

  render() {
    const {tossCount, headsCount, tailsCount, imageUrl} = this.state
    // console.log(
    //   `tosscount: ${tossCount}`,
    //   `heads:${headsCount}`,
    //   `tails:${tailsCount}`,
    // )
    return (
      <div className="app-container">
        <div className="coin-toss-section">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="tag-line">Heads (or) Tails</p>
          <img src={imageUrl} alt="toss result" className="coin-image" />
          <button
            onClick={this.onCoinTossed}
            type="button"
            className="toss-button"
          >
            Toss Coin
          </button>
          <ul className="results-section">
            <li className="result-item">
              <p className="result">Total: {tossCount}</p>
            </li>
            <li className="result-item">
              <p className="result">Heads: {headsCount}</p>
            </li>
            <li className="result-item">
              <p className="result">Tails: {tailsCount}</p>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default CoinToss
