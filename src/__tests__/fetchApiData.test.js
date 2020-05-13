import axios from "axios"

import { fetchApiData } from "../helper/fetchApiData"

jest.mock("axios")

describe("fetchData from the API", () => {
  it("Successfully fetches data from an API", async () => {
    const data = { data: "name" }

    axios.get.mockImplementationOnce(() => Promise.resolve(data))

    await expect(fetchApiData("username")).resolves.toBe("name")
  })

  it("It throws an error message", async () => {
    const errorMessage = "Network Error"

    axios.get.mockImplementationOnce(() =>
      Promise.reject(new Error(errorMessage))
    )

    await expect(fetchApiData("usernamea")).rejects.toThrow(errorMessage)
  })
})
