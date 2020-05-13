import React, { useEffect, useState } from "react"
import { DisplaySortedRepoData } from "./DisplaySortedRepoData"
import { fetchApiData } from "../helper/fetchApiData"

export function GetRepoData({ userName, numOfrepos, showStars }) {
  const [repoData, setRepoData] = useState([])
  useEffect(() => {
    fetchApiData(userName).then(setRepoData)
  }, [userName])
  return (
    <DisplaySortedRepoData
      showStars={showStars}
      numOfrepos={numOfrepos}
      repoData={repoData}
    />
  )
}
