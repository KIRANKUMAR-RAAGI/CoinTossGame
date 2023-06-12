// Write your code here
import {Component} from 'react'

import './index.css'

const imageUrl = {
  Heads: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
  Tails: 'https://assets.ccbp.in/frontend/react-js/tails-img.png',
}

class CoinToss extends Component {
  state = {count: 0, heads: 0, tails: 0, url: imageUrl.Heads}

  onClickTossButton = () => {
    const tossResult = Math.floor(Math.random() * 2)
    this.setState(prevState => ({
      count: prevState.count + 1,
    }))

    if (tossResult === 0) {
      this.setState(prevState => ({
        heads: prevState.heads + 1,
        url: imageUrl.Heads,
      }))
    } else {
      this.setState(prevState => ({
        tails: prevState.tails + 1,
        url: imageUrl.Tails,
      }))
    }
  }

  render() {
    const {count, heads, tails, url} = this.state

    return (
      <div className="page-container">
        <div className="coin-game">
          <h1 className="game-heding">Coin Toss Game</h1>
          <p className="description">Heads (or) Tails</p>
          <img src={url} alt="toss result" className="image" />
          <button
            type="button"
            className="toss-button"
            onClick={this.onClickTossButton}
          >
            Toss Coin
          </button>
          <div className="result-tabs">
            <p className="tab">Total:{count}</p>
            <p className="tab">Heads:{heads}</p>
            <p className="tab">Tails:{tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
