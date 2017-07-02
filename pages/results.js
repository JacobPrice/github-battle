import React from 'react'
import PropTypes from 'prop-types'
import queryString from 'query-string'
import api from '../utils/api'
import {Loader,Row} from '../components/Elements'
import Link from 'next/link'



const Player = (props) => {
  return (
    <div>
      <h1>{props.label}</h1>
      <h3 style={{textAlign: 'center'}}>Score: {props.score} </h3>
    </div>
  )
}
Player.propTypes = {
  label: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  profile: PropTypes.object.isRequired
}
class Results extends React.Component {
constructor(props) {
  super(props)
  this.state = {
    winner: null,
    loser: null,
    error: null,
    loading: true
  }
}
componentDidMount() {
  let players = queryString.parse(this.props.url.query.name)

  api.battle([
    players.playerOneName,
    players.playerTwoName
  ]).then(function (players) {
      if (players === null) {
        return this.setState(function () {
          return {
            error: 'Looks like there was an error. Check that both users exist on Github.',
            loading: false,
          }
        });
      }
      this.setState(function () {
        return {
          error: null,
          winner: players[0],
          loser: players[1],
          loading: false,
        }
      });
    }.bind(this));
  }
  render() {
    let error = this.state.error
    let winner = this.state.winner
    let loser  = this.state.loser
    let loading = this.state.loading
    if (loading === true) {
      return <Loader>Loading...</Loader>
    }
    if (error) {
      return (
        <div>
          <p>{error}</p>
        <Link href='/battle'>Reset</Link>
        </div>
      )

    }
    console.log( winner,loser)
    return (
<Row>
  <Player
    label='Winner'
    score={winner.score}
    profile={winner.profile} />
  <Player
    label='Loser'
    score={loser.score}
    profile={loser.profile} />
</Row>
    )
  }
}

export default Results
