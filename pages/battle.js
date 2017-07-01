import React from 'react'
import PropTypes from 'prop-types'
import Page from '../components/Page'
import Link from 'next/link'
import {Column, Row, Button, Avatar} from '../components/Elements'
import styled from 'styled-components'

const Reset = styled.button`
border: none;
background: transparent;
color: #d0021b;
display: block;
width: 100%;
text-align: center;
&:hover {
  cursor: pointer;
}
`
function PlayerPreview (props) {
  return (
    <div>
      <Column>
        <Avatar
          src={props.avatar}
          alt={'Avatar for ' + props.username}
        />
        <h2 className='username'>@{props.username}</h2>
      </Column>
      <Reset
        onClick={props.onReset.bind(null, props.id)}>
        Reset
      </Reset>
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
      <form onSubmit={this.handleSubmit}>
        <Column width='500px' center>

          <label className='header' htmlFor='username'>{this.props.label}</label>
          <input
            id='username'
            placeholder='github username'
            type='text'
            value={this.state.username}
            autoComplete='off'
            onChange={this.handleChange}
          />
          <Button

            type='submit'
            disabled={!this.state.username}>
            Submit
          </Button>
        </Column>
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
        <Row>
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
        </Row>

        {playerOneImage && playerTwoImage &&
          <Link

            href={{ pathname: 'results', query: { name: '?playerOneName=' + playerOneName + '&playerTwoName=' + playerTwoName }}}>
            <Button>Battle</Button>
          </Link>}

      </div>
    )
  }
}

export default () => {
  return (
    <Page>
      <Battle />
    </Page>
  )
}
