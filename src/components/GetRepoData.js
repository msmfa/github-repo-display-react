import React, { useEffect, useState } from "react"
import { DisplaySortedRepoData } from "./DisplaySortedRepoData"
import { fetchApiData } from "../helper/fetchApiData"

export function GetRepoData({ userName, numOfrepos, showStars, showLanguage }) {
  const [repoData, setRepoData] = useState([])
  useEffect(() => {
    fetchApiData(userName).then(setRepoData)
  }, [userName])
  return (
    <DisplaySortedRepoData
      showLanguage={showLanguage}
      showStars={showStars}
      numOfrepos={numOfrepos}
      repoData={repoData}
    />
  )
}
