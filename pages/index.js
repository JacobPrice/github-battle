import React from 'react'
import Link from 'next/link'
import Page from '../components/Page'
import {Button,Column} from '../components/Elements'


class Home extends React.Component {
  render() {
    return (
      <Page>
        <Column center>
          <h1>Github Battle ⚔️🛡️</h1>
          <Link href="/battle"><Button>test</Button></Link>
        </Column>
      </Page>
    )
  }
}
export default Home
