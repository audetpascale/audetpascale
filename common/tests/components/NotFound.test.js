/**
 * @jest-environment jsdom
 */
import React from "react";
import renderer from "react-test-renderer";
import { NotFound } from "../../index";

test("Generate NotFound", () => {
  const component = renderer.create(<NotFound>Facebook</NotFound>);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
