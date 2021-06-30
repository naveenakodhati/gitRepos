// Write your code here
import {Component} from 'react'
import './index.css'

class RepositoryItem extends Component {
  render() {
    const {repoDataItem} = this.props
    const {avatarUrl, name, starsCount, forksCount, issuesCount} = repoDataItem
    return (
      <li className="list-item-container">
        <img className="image" src={avatarUrl} alt={name} />
        <h1 className="item-name">{name}</h1>
        <div className="display-items-container">
          <img
            className="items-image"
            src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
            alt="stars"
          />
          <p>{starsCount} stars</p>
        </div>
        <div className="display-items-container">
          <img
            className="items-image"
            src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
            alt="forks"
          />
          <p>{forksCount} forks</p>
        </div>
        <div className="display-items-container">
          <img
            className="items-image"
            src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
            alt="open-issues"
          />
          <p>{issuesCount} open issues</p>
        </div>
      </li>
    )
  }
}

export default RepositoryItem
