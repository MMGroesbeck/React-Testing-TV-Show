import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import App from "./App";

import { fetchShow as mockFetchShow } from "./api/fetchShow";
import { testData } from "./testData";

jest.mock("./api/fetchShow");

test ("Stranger Things main page loads", async () => {
    mockFetchShow.mockResolvedValueOnce(testData);
    const { getByText, queryAllByTestId } = render (<App/>);
    await waitFor(() => {
        expect(mockFetchShow).toHaveBeenCalledTimes(1);
    })
});