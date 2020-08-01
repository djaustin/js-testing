import React from "react";
import { render } from "@testing-library/react";
import user from "@testing-library/user-event";
import App from "./App";
import { fetchName } from "./integration/fetchData";

describe("App", () => {
  it("should display name on button click", async () => {
    expect.assertions(3);
    const { findByText, queryByText, getByRole, getByText } = render(<App />);

    expect(getByText(/unknown/i)).toBeInTheDocument();
    expect(queryByText(/John/)).not.toBeInTheDocument();

    user.click(getByRole("button", { name: /get name/i }));

    await findByText(/John/);
    expect(queryByText(/unknown/i)).not.toBeInTheDocument();
  });
});
