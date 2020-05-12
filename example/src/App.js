import React from "react"

import { GithubRepoDisplay } from "github-repo-display-react"
import "github-repo-display-react/dist/index.css"

const App = () => {
  return (
    <div className='repos'>
      <GithubRepoDisplay userName='msmfa' />
    </div>
  )
}

export default App
