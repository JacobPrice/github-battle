import React from 'react'
import Page from '../components/Page'
import PropTypes from 'prop-types'
import api from '../utils/api'
import styled from 'styled-components'
import {Avatar, Loader} from '../components/Elements'
const Languages = styled.ul`
display: flex;
justify-content: center;
 li {
  margin: 10px;
  font-weight: bold;
  cursor: pointer;
}
`
const PopularList = styled.ul`
display: flex;
flex-wrap: wrap;
justify-content: space-around;
`
const PopularItem = styled.li`
margin: 20px;
text-align: center;
`
const PopularRank = styled.div`
font-size: 20px;
margin: 10px;
`
function SelectLanguage (props) {
  var languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python']
  return (
    <Languages>
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
    </Languages>
  )
}

function RepoGrid (props) {
  return (
    <PopularList>
      {props.repos.map(function (repo, index) {
        return (
          <PopularItem key={repo.name} >
            <PopularRank>#{index + 1}</PopularRank>
            <ul className='space-list-items'>
              <li>
                <Avatar
                  className='avatar'
                  src={repo.owner.avatar_url}
                  alt={'Avatar for ' + repo.owner.login}
                />
              </li>
              <li><a href={repo.html_url}>{repo.name}</a></li>
              <li>@{repo.owner.login}</li>
              <li>{repo.stargazers_count} stars</li>
            </ul>
          </PopularItem>
        )
      })}
    </PopularList>
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
          ? <Loader>LOADING!</Loader>
          : <RepoGrid repos={this.state.repos} />}
      </div>
    )
  }
}
class Index extends React.Component {
  render() {
    return (
      <Page>
        <Popular />
      </Page>
    )
  }
}

export default Index
