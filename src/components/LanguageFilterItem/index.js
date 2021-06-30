// Write your code here

import './index.css'

const LanguageFilterItem = props => {
  const {languageData, onChangeSelectedTabRepo, languageName} = props
  const {id, language} = languageData

  const selectedRepo = () => {
    onChangeSelectedTabRepo(id)
  }

  const isSelectName = languageName === id ? 'styling-background' : ''

  return (
    <li className={`link-item ${isSelectName}`}>
      <button type="button" onClick={selectedRepo} className="button">
        {language}
      </button>
    </li>
  )
}
export default LanguageFilterItem
