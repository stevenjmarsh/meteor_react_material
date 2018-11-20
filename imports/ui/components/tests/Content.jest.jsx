/* eslint-env jest */
/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions */
/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import renderer from "react-test-renderer";
import Content from "../Content";

describe("<Content />", () => {
  it("should match render snapshot", () => {
    const tree = renderer.create(<Content />);
    expect(tree).toMatchSnapshot();
  });
});
