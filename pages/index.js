const React = require('react')
const Popular = require('../components/Popular')

class App extends React.Component {
  render() {
    return (
      <div>
        <Popular />
        <style jsx global>{`
          body {
            font-family:  -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
          }
        `}</style>
      </div>
    )
  }
}

export default App
