import React from 'react'
import Popular from '../components/Popular'

class App extends React.Component {
  render() {
    return (
      <div>
        <Popular />
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
}

export default App
