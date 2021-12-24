/**
 * @jest-environment jsdom
 */
import React from "react";
import renderer from "react-test-renderer";
import { GenericNotFound } from "../../index";

test("Generate NotFound", () => {
  const component = renderer.create(<GenericNotFound />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
