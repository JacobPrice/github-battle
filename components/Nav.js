import React from 'react'
import Link from 'next/link'
import Router from 'next/router'


class Nav extends React.Component {
  render() {
    return (
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/popular">Popular</Link>
        </li>
      </ul>
    )
  }
}

module.exports = Nav
