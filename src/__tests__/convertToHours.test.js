import { convertToHours } from "../helper/convertToHours"

test("tests", () => {
  expect(convertToHours(12)).toEqual("12 seconds ago")
})
test("tests", () => {
  expect(convertToHours(60)).toEqual("1 minute ago")
})
test("tests", () => {
  expect(convertToHours(180)).toEqual("3 minutes ago")
})
test("tests", () => {
  expect(convertToHours(3600)).toEqual("1 hour ago")
})
test("tests", () => {
  expect(convertToHours(10800)).toEqual("3 hours ago")
})
test("tests", () => {
  expect(convertToHours(13800)).toEqual("3 hours ago")
})
test("tests", () => {
  expect(convertToHours(86400)).toEqual("1 day ago")
})
test("tests", () => {
  expect(convertToHours(172800)).toEqual("2 days ago")
})
test("tests", () => {
  expect(convertToHours(604800)).toEqual("1 week ago")
})

test("tests", () => {
  expect(convertToHours(604809)).toEqual("1 week ago")
})
test("tests", () => {
  expect(convertToHours(1300000)).toEqual("2 weeks ago")
})
test("tests", () => {
  expect(convertToHours(2592000)).toEqual("1 month ago")
})
test("tests", () => {
  expect(convertToHours(5184000)).toEqual("2 months ago")
})
test("tests", () => {
  expect(convertToHours(31536000)).toEqual("1 year ago")
})
test("tests", () => {
  expect(convertToHours(63072000)).toEqual("2 years ago")
})
