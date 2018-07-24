import React from "react";

import { shallow } from "enzyme";

import { App } from "../app/App";

describe("App", () => {
  it("shows the App component", () => {
    const checkedToken = "test";
    const loading = false;
    const error = null;
    const checkForToken = () => {};

    const wrapper = shallow(
      <App
        checkedToken={checkedToken}
        loading={loading}
        error={error}
        checkForToken={checkForToken}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
