import React from 'react'
import Nav from '../components/Nav'
import Link from 'next/link'

class Home extends React.Component {
  render() {
    return (
      <div className="home-container">
        <h1>Github Battle ⚔️🛡️</h1>
        <Link href="/battle"><span className="button">test</span></Link>
        <style jsx>{`
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

  .button:hover {
    background: linear-gradient(#1a1a1a,#0a0a0a);
    color: #fff;
    text-decoration: none;
  }

  .button:active {
    transform: translateY(1px);
  }
  .home-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
      `}</style>
      </div>
    )
  }
}
export default () =>  {
    return (
      <div>
        <Nav />
        <Home />
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
        `}</style>
      </div>
    )
  }
