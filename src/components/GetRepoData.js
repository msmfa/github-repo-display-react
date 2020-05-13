import React, { useEffect, useState } from "react"
import { DisplaySortedRepoData } from "./DisplaySortedRepoData"
import { fetchApiData } from "../helper/fetchApiData"
export function GetRepoData({ userName, numOfrepos }) {
  const [repoData, setRepoData] = useState([])
  useEffect(() => {
    fetchApiData(userName).then(setRepoData)
  }, [userName])
  return <DisplaySortedRepoData numOfrepos={numOfrepos} repoData={repoData} />
}
