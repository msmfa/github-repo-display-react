import { removeDash } from "../helper/removeDash"

test("Removes `-` from a string", () => {
  expect(removeDash("A-string-with-dashes")).toEqual("A string with dashes")
})
test("Does not effect a non dash string", () => {
  expect(removeDash("A string with dashes")).toEqual("A string with dashes")
})
test("Removes `-` from a Capitalised string", () => {
  expect(removeDash("A-CAPITAL-STRING")).toEqual("A CAPITAL STRING")
})
