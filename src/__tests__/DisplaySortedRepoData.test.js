import { DisplaySortedRepoData } from "../components/DisplaySortedRepoData"
import ReactDOM, { unmountComponentAtNode } from "react-dom"
import React from "react"
import Enzyme from "enzyme"
import Adapter from "enzyme-adapter-react-16"

Enzyme.configure({ adapter: new Adapter() })

it("Renders without crashing", () => {
  const div = document.createElement("div")
  ReactDOM.render(<DisplaySortedRepoData />, div)
})

let container = null
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div")
  document.body.appendChild(container)
})

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container)
  container.remove()
  container = null
})
