import React from 'react'
import PropTypes from 'prop-types'
import Nav from '../components/Nav'

class PlayerInput extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(event) {
    var value = event.target.value

    this.setState(() => {
      return {
        username: value
      }
    })
  }
  handleSubmit(event) {
    event.preventDefault()

    this.props.onSubmit(
      this.props.id,
      this.state.username
    )
  }
  render() {
    return (
      <form className='column' onSubmit={this.handleSubmit}>
        <label className='header' htmlFor='username'>{this.props.label}</label>
        <input
          id='username'
          placeholder='github username'
          type='text'
          value={this.state.username}
          autoComplete='off'
          onChange={this.handleChange}
        />
        <button
          className='button'
          type='submit'
          disabled={!this.state.username}>
            Submit
        </button>
      </form>
    )
  }
}

PlayerInput.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
}

PlayerInput.defaultProps = {
  label: 'Username',
}

class Battle extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      playerOneName: '',
      playerTwoName: '',
      playerOneImage: null,
      playerTwoImage: null,
    }

    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit(id, username) {
    this.setState(() => {
      var newState = {}
      newState[id + 'Name'] = username
      newState[id + 'Image'] = 'https://github.com/' + username + '.png?size=200'
      return newState
    })
  }
  render() {
    var playerOneName = this.state.playerOneName
    var playerTwoName = this.state.playerTwoName

    return (
      <div>
        <div className='row'>
          {!playerOneName &&
            <PlayerInput
              id='playerOne'
              label='Player One'
              onSubmit={this.handleSubmit}
            />}

          {!playerTwoName &&
            <PlayerInput
              id='playerTwo'
              label='Player Two'
              onSubmit={this.handleSubmit}
            />}
        </div>
        <style jsx global>{`
          body {
            font-family:  -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
          }
          ul {
            padding: 0;
          }
          li {
            list-style-type: none;
          }
          .nav {
            display: flex;
          }

          .nav li {
            margin-right: 15px;
          }

          .active {
            font-weight: bold;
          }
            .row {
            display: flex;
            justify-content: space-around;
          }

          .column {
            display: flex;
            flex-direction: column;
            width: 500px;
            align-items: center;
          }
          .button {
            color: #e6e6e6;
            background: #0a0a0a;
            border: none;
            font-size: 16px;
            border-radius: 3px;
            width: 200px;
            text-align: center;
            display: block;
            padding: 7px 0;
            margin: 10px auto;
          }
          a {
            text-decoration: none;
            color: #d0021b;
          }
          .button:hover:enabled {
            background: linear-gradient(#1a1a1a,#0a0a0a);
            color: #fff;
            text-decoration: none;
          }

          .button:active {
            transform: translateY(1px);
          }

          .column {
            display: flex;
            flex-direction: column;
            width: 500px;
            align-items: center;
          }

          .column input {
            border-radius: 3px;
            margin: 10px 0;
            padding: 5px;
            border: 1px solid rgba(0, 0, 0, 0.43);
            font-size: 16px;
            width: 80%;
          }

          .column label {
            text-align: center;
            font-size: 30px;
            font-weight: 200;
          }

          .header {
            text-align: center;
            font-size: 30px;
            font-weight: 200;
          }
        `}</style>
      </div>
    )
  }
}

export default () => {
  return (
    <div>
      <Nav />
      <Battle />
    </div>
  )
}
