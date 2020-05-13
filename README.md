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
import "github-repo-display-react/dist/index.css" // default github styling

const App = () => {
  return (
    <div>
      <GithubRepoDisplay
        numOfrepos={5} // must be included
        userName='msmfa' // must be included
      />
    </div>
  )
}

export default App
```

## Configuration

```jsx
...

const App = () => {
  return (
    <div>
      <GithubRepoDisplay
        numOfrepos={5}
        userName='msmfa'
        showStars={true} // displays stars
        showLanguage ={true} // displays language
      />
    </div>
  )
}

...
```

## Screenshot

![](src/helper/IMG/react-comp-github-ss)

## License

MIT © [MSMFA](https://github.com/msmfa)
