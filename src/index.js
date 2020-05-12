import React, { useEffect, useState } from "react"
import styles from "./styles.module.css"
import Axios from "Axios"
import { DisplaySortedRepoData } from "./components/DisplaySortedRepoData"
const fetchApiData = async (username) => {
  const response = await Axios.get(
    `https://api.github.com/users/${username}/repos`
  )
  return response.data
}

function GetRepoData({ userName }) {
  const [repoData, setRepoData] = useState([])

  useEffect(() => {
    fetchApiData(userName).then(setRepoData)
  }, [userName])

  return <DisplaySortedRepoData numOfrepos={3} repoData={repoData} />
}

export const GithubRepoDisplay = ({ userName }) => {
  return (
    <div className={styles.test}>
      {" "}
      <GetRepoData userName={userName} />
    </div>
  )
}
