import React from "react"
import styles from "./styles.module.css"
import Axios from "Axios"
import { GetRepoData } from "./components/GetRepoData"
export const fetchApiData = async (username) => {
  const response = await Axios.get(
    `https://api.github.com/users/${username}/repos`
  )
  return response.data
}

export const GithubRepoDisplay = ({ userName, numOfrepos }) => {
  return (
    <div className={styles.test}>
      {" "}
      <GetRepoData numOfrepos={numOfrepos} userName={userName} />
    </div>
  )
}
