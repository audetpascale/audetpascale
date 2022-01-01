/** @jsx jsx */
// noinspection ES6UnusedImports
import { Container, jsx } from "theme-ui";
import Plan from "../components/plot/Plan";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import PropTypes from "prop-types";
import { Provider } from "react-redux";
import store from "../store";
import Crops from "../components/crop/Crops";

const DataPage = () => {
  return (
    <Provider store={store}>
      <Layout>
        <Container>
          <Crops />
          <Plan />
        </Container>
      </Layout>
    </Provider>
  );
};

export default DataPage;

DataPage.propTypes = {
  data: PropTypes.object,
};

export const pageQuery = graphql`
  query PlanPageQuery($id: String!) {
    site {
      siteMetadata {
        title
        description
      }
    }
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        heading
        subheading
      }
    }
  }
`;
