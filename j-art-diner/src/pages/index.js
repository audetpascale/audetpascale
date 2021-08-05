import { Container, Heading, Text } from "theme-ui";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import PropTypes from "prop-types";
import { Provider } from "react-redux";
import React from "react";
import store from "../store";

const IndexPage = (props) => {
  return (
    <Provider store={store}>
      <Layout>
        <Container variant="main">
          <Heading as="h1">{props.data.site.siteMetadata.title}</Heading>
          <Text>{props.data.site.siteMetadata.description}</Text>
        </Container>
      </Layout>
    </Provider>
  );
};

export default IndexPage;

IndexPage.propTypes = {
  data: PropTypes.object,
};

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;
