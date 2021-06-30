import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import LanguageFilterItem from '../LanguageFilterItem'

import './index.css'
import RepositoryItem from '../RepositoryItem'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

// Write your code here
class GithubPopularRepos extends Component {
  state = {selectLanguage: 'ALL', objData: [], isLoading: true}

  componentDidMount() {
    const {selectLanguage} = this.state
    this.getRepository(selectLanguage)
  }

  getRepository = async selectedLanguage => {
    const url = `https://apis.ccbp.in/popular-repos?language=${selectedLanguage}`
    const response = await fetch(url)

    const data = await response.json()
    console.log(data)
    const updatedData = data.popular_repos.map(eachDataObj => ({
      id: eachDataObj.id,
      avatarUrl: eachDataObj.avatar_url,
      name: eachDataObj.name,
      starsCount: eachDataObj.stars_count,
      forksCount: eachDataObj.forks_count,
      issuesCount: eachDataObj.issues_count,
    }))
    this.setState({objData: updatedData, isLoading: false})
  }

  onChangeSelectedTabRepo = id => {
    this.setState({selectLanguage: id, isLoading: true})
    this.getRepository(id)
  }

  render() {
    const {objData, isLoading, selectLanguage} = this.state

    return (
      <div className="main-bg-container">
        <h1 className="main-heading">Popular</h1>
        <ul className="language-container">
          {languageFiltersData.map(eachData => (
            <LanguageFilterItem
              languageName={selectLanguage}
              onChangeSelectedTabRepo={this.onChangeSelectedTabRepo}
              key={eachData.id}
              languageData={eachData}
            />
          ))}
        </ul>

        {isLoading ? (
          <div testid="loader">
            <Loader type="ThreeDots" color="#0284c7" height={80} width={80} />
          </div>
        ) : (
          <ul className="repos-container">
            {objData.map(eachRepoData => (
              <RepositoryItem
                key={eachRepoData.id}
                repoDataItem={eachRepoData}
              />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default GithubPopularRepos
