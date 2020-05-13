import React from "react"
import styles from "./styles.module.css"
import { GetRepoData } from "./components/GetRepoData"

export const GithubRepoDisplay = ({ userName, numOfrepos, showStars }) => {
  return (
    <div className={styles.test}>
      {" "}
      <GetRepoData
        showStars={showStars}
        numOfrepos={numOfrepos}
        userName={userName}
      />
    </div>
  )
}
