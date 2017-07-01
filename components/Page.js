import Head from 'next/head'
import Nav from '../components/Nav'
import React from 'react'
export default ({ children }) => (
  <div>
    <Head>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>
    <header>
      <Nav />
    </header>

    { children }

    <footer>
      {'I`m here to stay'}
    </footer>
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
