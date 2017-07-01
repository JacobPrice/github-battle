import Head from 'next/head'
import Nav from '../components/Nav'
import React from 'react'
import styled from 'styled-components'
import { Global } from '../components/Elements'

export default ({ children }) => (
  <div>
    <Head>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>
    <Global>
      <header>
        <Nav />
      </header>

      { children }

      <footer>
        {'Footer'}
      </footer>
    </Global>
  </div>
)
