import React from "react"

import { GithubRepoDisplay } from "github-repo-display-react"
import "github-repo-display-react/dist/index.css"
const App = () => {
  return (
    <div className='repos'>
      <GithubRepoDisplay
        numOfrepos={3}
        userName='msmfa'
        showStars={true}
        showLanguage={true}
      />
    </div>
  )
}

export default App
