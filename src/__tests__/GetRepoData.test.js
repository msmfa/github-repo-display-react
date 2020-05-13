import { GetRepoData } from "../components/GetRepoData"
import { DisplaySortedRepoData } from "../components/DisplaySortedRepoData"
import ReactDOM from "react-dom"
import React from "react"
import Enzyme, { shallow } from "enzyme"
import Adapter from "enzyme-adapter-react-16"

Enzyme.configure({ adapter: new Adapter() })

test("Renders without crashing", () => {
  const div = document.createElement("div")
  ReactDOM.render(<GetRepoData />, div)
})

it("Isolation render test", () => {
  shallow(<GetRepoData />)
})

it("Renders DisplayRepoData", () => {
  const wrapper = shallow(<GetRepoData />)
  expect(wrapper.find(DisplaySortedRepoData)).toHaveLength(1)
})
