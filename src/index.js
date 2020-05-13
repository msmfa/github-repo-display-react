import React from "react"
import styles from "./styles.module.css"
import Axios from "Axios"
import { GetRepoData } from "./components/GetRepoData"

export const GithubRepoDisplay = ({ userName, numOfrepos }) => {
  return (
    <div className={styles.test}>
      {" "}
      <GetRepoData numOfrepos={numOfrepos} userName={userName} />
    </div>
  )
}
