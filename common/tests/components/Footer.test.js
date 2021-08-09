/**
 * @jest-environment jsdom
 */
import React from "react";
import renderer from "react-test-renderer";
import { Footer } from "../../index";

test("Generate Footer", () => {
  const component = renderer.create(
    <Footer author="John Doe" title="Jest" image="Logo here" year="1900" />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
