import React from 'react'
import PropTypes from 'prop-types'
import Nav from '../components/Nav'
import Link from 'next/link'


function PlayerPreview (props) {
  return (
    <div>
      <div className='column'>
        <img
          className='avatar'
          src={props.avatar}
          alt={'Avatar for ' + props.username}
        />
        <h2 className='username'>@{props.username}</h2>
      </div>
      <button
        className='reset'
        onClick={props.onReset.bind(null, props.id)}>
          Reset
      </button>
    </div>
  )
}

PlayerPreview.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  onReset: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired
};

class PlayerInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    var value = event.target.value;

    this.setState(function () {
      return {
        username: value
      }
    });
  }
  handleSubmit(event) {
    event.preventDefault();

    this.props.onSubmit(
      this.props.id,
      this.state.username
    );
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
    super(props);
    this.state = {
      playerOneName: '',
      playerTwoName: '',
      playerOneImage: null,
      playerTwoImage: null,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }
  handleSubmit(id, username) {
    this.setState(function () {
      var newState = {};
      newState[id + 'Name'] = username;
      newState[id + 'Image'] = 'https://github.com/' + username + '.png?size=200'
      return newState;
    });
  }
  handleReset(id) {
    this.setState(function () {
      var newState = {};
      newState[id + 'Name'] = '';
      newState[id + 'Image'] = null;
      return newState;
    })
  }
  render() {
    var match = this.props.match;
    var playerOneName = this.state.playerOneName;
    var playerOneImage = this.state.playerOneImage;
    var playerTwoName = this.state.playerTwoName;
    var playerTwoImage = this.state.playerTwoImage;

    return (
      <div>
        <div className='row'>
          {!playerOneName &&
            <PlayerInput
              id='playerOne'
              label='Player One'
              onSubmit={this.handleSubmit}
            />}

          {playerOneImage !== null &&
            <PlayerPreview
              avatar={playerOneImage}
              username={playerOneName}
              onReset={this.handleReset}
              id='playerOne'
            />}

          {!playerTwoName &&
            <PlayerInput
              id='playerTwo'
              label='Player Two'
              onSubmit={this.handleSubmit}
            />}

          {playerTwoImage !== null &&
            <PlayerPreview
              avatar={playerTwoImage}
              username={playerTwoName}
              onReset={this.handleReset}
              id='playerTwo'
            />}
        </div>

        {playerOneImage && playerTwoImage &&
          <Link

            href={{ pathname: 'results', query: { name: '?playerOneName=' + playerOneName + '&playerTwoName=' + playerTwoName }}}>
            <a className='button'>Battle</a>
          </Link>}
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
            .avatar {
              width: 150px;
              border-radius: 50%;
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
          .reset {
            border: none;
            background: transparent;
            color: #d0021b;
            display: block;
            width: 100%;
            text-align: center;
          }

          .reset:hover {
            cursor: pointer;
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
