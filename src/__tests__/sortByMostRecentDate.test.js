import { sortByMostRecentDate } from "../helper/sortByMostRecentDate"

const unsortedArray = [
  {
    text: "Least Recent",
    updated_at: "2020-03-27T17:50:27Z"
  },
  { text: "Most Recent", updated_at: "2020-04-27T17:50:27Z" }
]

const sortedArray = [
  { text: "Most Recent", updated_at: "2020-04-27T17:50:27Z" },
  {
    text: "Least Recent",
    updated_at: "2020-03-27T17:50:27Z"
  }
]

test("Most recent date should appear first", () => {
  expect(sortByMostRecentDate(unsortedArray)).toEqual(sortedArray)
})
