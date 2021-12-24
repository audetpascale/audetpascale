/**
 * @jest-environment jsdom
 */
import React from "react";
import renderer from "react-test-renderer";
import { GenericLayout } from "../../index";
import { LocationProvider } from "@reach/router";

test("Generate Layout", () => {
  const component = renderer.create(
    <LocationProvider>
      <GenericLayout
        defaultSiteMetadata={{
          site: {
            siteMetadata: {
              author: "John Doe",
              description: { twitterUsername: "@johndoe" },
            },
          },
        }}
        menuItems={[]}
        footerImage={<img alt="footer logo" />}
        headerImage={<img alt="header logo" />}
        title="Jest"
        description="Hello world"
        image="Logo here"
        year={1900}
      >
        <span>Lorem ipsum</span>
      </GenericLayout>
    </LocationProvider>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
