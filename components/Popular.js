const React = require('react')

class Popular extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedLanguage: 'All'
    }
    this.updateLanguage = this.updateLanguage.bind(this)
  }
  updateLanguage(lang) {
    this.setState(() => {
      return {
        selectedLanguage: lang
      }
    })
  }
  render() {
    console.log(this.state)
    let languages = ['All', 'Javascript', 'Ruby', 'Java', 'CSS', 'Python']
    return (
      <ul className='languages'>
        {
          languages.map((lang) => {
            return (
              <li
                style={lang === this.state.selectedLanguage ? {color : '#d0021b'} : null}
                key={lang}
                onClick={this.updateLanguage.bind(null, lang)}>
                {lang}
              </li>
            )
          })
        }
        <style jsx>{`
          ul {
            padding: 0;
          }
          li {
            list-style-type: none;
          }
          .languages {
            display: flex;
            justify-content: center;
          }
          .languages li {
            margin: 10px;
            font-weight: bold;
            cursor: pointer;
          }
        `}</style>
      </ul>
    )
  }
}

module.exports = Popular
