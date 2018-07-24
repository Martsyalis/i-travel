import React from "react";

import { shallow } from "enzyme";

import { Experience } from "../experience/Experience";

describe("Experience", () => {
  it("shows the Experience component", () => {
    const wrapper = shallow(
      <Experience
        user={{}}
        exp={[]}
        loadExp={() => {}}
        addImageToExp={() => {}}
        DeleteImage={() => {}}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
