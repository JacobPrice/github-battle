import React from 'react'
import Link from 'next/link'
import Router from 'next/router'
import styled from 'styled-components'

const NavContainer  = styled.ul`
  display: flex;
`
const NavItem = styled.li`
  margin-right: 15px;
  list-style: none;
  color: #d0021b;
  font-weight: ${props => props.active ? 'bold' : ''};
`
const Anchor = styled.a`
  color: inherit;
`

class Nav extends React.Component {
  constructor(props) {
    super(props)
  this.state = {
    nav: [{
      path: '/',
      name: 'Home'
    }, {
      path: '/popular',
      name: 'Popular',
    }, {
      path: '/battle',
      name: 'Battle'
    }],
    path: `/`
  }
}
componentDidMount() {
  this.setState({
    path: location.pathname
  })
}
  render() {
    return (
      <NavContainer>
        {this.state.nav.map((props) => {
          return <NavItem section={props.path} active={this.state.path === props.path} >
            <Link href={props.path}>
              <Anchor>{props.name}</Anchor>
            </Link>
          </NavItem>
        })}

    </NavContainer>
    )
  }
}

module.exports = Nav
