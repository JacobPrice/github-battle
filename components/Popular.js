import React from 'react'
import PropTypes from 'prop-types'
import api from '../utils/api'

function SelectLanguage (props) {
  var languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python']
  return (
    <ul className='languages'>
      {languages.map(function (lang) {
        return (
          <li
            style={lang === props.selectedLanguage ? {color: '#d0021b'} : null}
            onClick={props.onSelect.bind(null, lang)}
            key={lang}>
            {lang}
          </li>
        )
      })}
      <style jsx>{`
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

function RepoGrid (props) {
  return (
    <ul className='popular-list'>
      {props.repos.map(function (repo, index) {
        return (
          <li key={repo.name} className='popular-item'>
            <div className='popular-rank'>#{index + 1}</div>
            <ul className='space-list-items'>
              <li>
                <img
                  className='avatar'
                  src={repo.owner.avatar_url}
                  alt={'Avatar for ' + repo.owner.login}
                />
              </li>
              <li><a href={repo.html_url}>{repo.name}</a></li>
              <li>@{repo.owner.login}</li>
              <li>{repo.stargazers_count} stars</li>
            </ul>
          </li>
        )
      })}
      <style jsx>{`
        .popular-list {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-around;
        }
        .popular-item {
          margin-left: 20px;
          text-align: center;
        }
        .space-list-items {
          margin-bottom: 7px;
        }
        .avatar {
          width: 150px;
          border-radius: 50%;
        }
        .popular-rank {
          font-size: 20px;
          margin: 10px;
        }
      `}</style>
    </ul>
  )
}

RepoGrid.propTypes = {
  repos: PropTypes.array.isRequired,
}

SelectLanguage.propTypes = {
  selectedLanguage: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
}

class Popular extends React.Component {
  constructor(props) {
    super()
    this.state = {
      selectedLanguage: 'All',
      repos: null,
    }

    this.updateLanguage = this.updateLanguage.bind(this)
  }
  componentDidMount() {
    this.updateLanguage(this.state.selectedLanguage)
  }
  updateLanguage(lang) {
    this.setState(function () {
      return {
        selectedLanguage: lang,
        repos: null
      }
    })

    api.fetchPopularRepos(lang)
      .then(function (repos) {
        this.setState(function () {
          return {
            repos: repos
          }
        })
      }.bind(this))
  }
  render() {
    return (
      <div>
        <SelectLanguage
          selectedLanguage={this.state.selectedLanguage}
          onSelect={this.updateLanguage} />
        {!this.state.repos
          ? <p className="loader">LOADING!</p>
          : <RepoGrid repos={this.state.repos} />}
        <style jsx>{`
        .loader,
        .loader:after {
          border-radius: 50%;
          width: 10em;
          height: 10em;
        }
        .loader {
          margin: 60px auto;
          font-size: 10px;
          position: relative;
          text-indent: -9999em;
          border-top: 1.1em solid rgba(255, 255, 255, 0.2);
          border-right: 1.1em solid rgb(208, 2, 27);
          border-bottom: 1.1em solid rgba(255, 255, 255, 0.2);
          border-left: 1.1em solid #ffffff;
          transform: translateZ(0);
          animation: load8 1.1s infinite linear;
        }
        @-webkit-keyframes load8 {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        @keyframes load8 {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        `}</style>
      </div>
    )
  }
}

module.exports = Popular
