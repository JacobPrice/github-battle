import React from 'react'
import Link from 'next/link'
import Page from '../components/Page'

class Home extends React.Component {
  render() {
    return (
      <Page>
        <div className="home-container">
          <h1>Github Battle ⚔️🛡️</h1>
          <Link href="/battle"><span className="button">test</span></Link>
        </div>
      </Page>
    )
  }
}
export default Home
