import React from 'react'
import {Column, Avatar, Reset} from '../components/Elements'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Username = styled.h2`
  text-align: center;
`

function PlayerPreview (props) {
  return (
    <div>
      <Column>
        <Avatar
          src={props.avatar}
          alt={'Avatar for ' + props.username}
        />
        <Username>@{props.username}</Username>
      </Column>
      {props.children}
    </div>
  )
}

PlayerPreview.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
}

export default PlayerPreview
