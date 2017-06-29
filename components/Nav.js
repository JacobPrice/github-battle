import React from 'react'
import Link from 'next/link'
import Router from 'next/router'


class Nav extends React.Component {
  render() {
    return (
      <ul className='nav'>
        <li>
          <Link href="/"><a>Home</a></Link>
        </li>
        <li>
          <Link href="/popular"><a>Popular</a></Link>
        </li>
        <li>
          <Link href="/battle"><a>Battle</a></Link>
        </li>
        <style jsx>{`
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
          a {
            text-decoration: none;
            color: #d0021b;
          }
        `}</style>
      </ul>
    )
  }
}

module.exports = Nav
