/* eslint-disable camelcase */
import { getRemainingSeconds } from "../helper/getRemainingSeconds"

test("Date format - seconds should output seconds", () => {
  const oneDayinSecs = 86400
  const APRIL_28th = "2020-04-28T13:56:54Z"
  const APRIL_29th = 1588168614607 // in seconds

  expect(getRemainingSeconds(new Date(APRIL_28th), APRIL_29th)).toEqual(
    oneDayinSecs
  )
})
