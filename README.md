# github-repo-display-react

> A react component that displays your Github repos

[![NPM](https://img.shields.io/npm/v/github-repo-display-react.svg)](https://www.npmjs.com/package/github-repo-display-react) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save github-repo-display-react
```

## Usage

```jsx
import React, { Component } from "react"

import { GithubRepoDisplay } from "github-repo-display-react"
import "github-repo-display-react/dist/index.css"

const App = () => {
  return (
    <div className='repos'>
      <GithubRepoDisplay
        numOfrepos={5} // must be included
        userName='msmfa' // must be included
        showStars={true}
        showLanguage={true}
      />
    </div>
  )
}

export default App
```

## License

MIT © [msmfa](https://github.com/msmfa)

## Functionality

[X] Set the number of Repos you want to show
[X] Show Stars
[X] Show Langauge
